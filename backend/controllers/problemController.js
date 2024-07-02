// const Problem = require('../models/problem');

// const saveProblem = async (req, res) => {
//   const { question, answer, isPublic } = req.body;
//   try {
//     const problem = new Problem({
//       question,
//       answer,
//       isPublic,
//       userId: req.user._id,
//     });
//     await problem.save();
//     res.status(201).json({ message: 'Problem saved successfully', problem });
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// const getPublicProblems = async (req, res) => {
//   try {
//     const problems = await Problem.find({ isPublic: true });
//     res.status(200).json({ problems });
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// const getPrivateProblems = async (req, res) => {
//   try {
//     const problems = await Problem.find({ userId: req.user._id, isPublic: false });
//     res.status(200).json({ problems });
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// module.exports = {
//   saveProblem,
//   getPublicProblems,
//   getPrivateProblems,
// };
