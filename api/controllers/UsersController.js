/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	/**
   * CommentController.create()
   */
	create: function(req, res) {
		var newAtm = {
			name: req.param('name'),
			x: req.param('x'),
			y: req.param('y'),
			x: req.param('z'),
			total: x + y + z
		};

		Atm.create(newAtm).exec(function(err, user) {
			if (err) return res.status(500).json({ error: err });

			return res.status(201).json({ data: user });
		});
	},


	getUser: function(req, res) {
		Users.find().exec(function(err, users) {
			if (err) return res.status(500).json({ error: err });

			if (users.length > 0) {
				return res.status(200).json({ data: users });
			} else {
				return res.status(404).json({ error: 'No users found' });
			}
		})
	},

	getUserById: function(req, res) {
		Users.find({ id: req.param('id') }).exec(function(err, existingUser) {
			if (err) return res.status(500).json({ error: err });

			if (existingUser.length > 0) {
				return res.status(200).json({ data: existingUser[0] });
			} else {
				return res.status(404).json({ error: 'No user found' });
			}
		})
	}

};
