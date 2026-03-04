const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { full_name, username, email, phone, barangay, password } = req.body;

    // Basic validation
    if (!full_name || !username || !email || !phone || !barangay || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const phoneRegex = /^\+639\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: "Invalid phone number format" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters" });
    }
    
    // Check if email already exists (active only)
    const [existingEmail] = await db
      .promise()
      .query("SELECT id FROM users WHERE email = ? AND status = 'active'", [
        email,
      ]);

    if (existingEmail.length > 0) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Check if username already exists (active only)
    const [existingUsername] = await db
      .promise()
      .query("SELECT id FROM users WHERE username = ? AND status = 'active'", [
        username,
      ]);

    if (existingUsername.length > 0) {
      return res.status(400).json({ message: "Username already taken" });
    }

    // Check if phone already exists (active only)
    const [existingPhone] = await db
      .promise()
      .query("SELECT id FROM users WHERE phone = ? AND status = 'active'", [
        phone,
      ]);

    if (existingPhone.length > 0) {
      return res.status(400).json({ message: "Phone number already in use" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user (force role = resident)
    await db.promise().query(
      `INSERT INTO users 
      (full_name, username, email, phone, barangay, password, role)
      VALUES (?, ?, ?, ?, ?, ?, 'resident')`,
      [full_name, username, email, phone, barangay, hashedPassword],
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login — accepts email, phone number, or username via single "identifier" field
exports.login = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Detect what the identifier is
    const isEmail = identifier.includes("@");
    const isPhone = /^(\+63|09)\d+/.test(identifier);

    let column;
    if (isEmail) {
      column = "email";
    } else if (isPhone) {
      column = "phone";
    } else {
      column = "username";
    }

    // Normalize phone: if user types 09XX, store/query as +639XX
    const normalizedIdentifier =
      isPhone && identifier.startsWith("09")
        ? "+63" + identifier.slice(1)
        : identifier;

    // Find user by detected column
    const [users] = await db
      .promise()
      .query(`SELECT * FROM users WHERE ${column} = ? AND status = 'active'`, [
        normalizedIdentifier,
      ]);

    if (users.length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const user = users[0];

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create token
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES },
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        full_name: user.full_name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
