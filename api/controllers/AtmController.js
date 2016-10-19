/**
 * AtmController
 *
 * @description :: Server-side logic for managing atms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function(req, res) {
		var x = req.param('x'),
			y = req.param('y'),
			z = req.param('z');
		var newAtm = {
			name: req.param('name'),
			total: req.param('total'),
			x: x,
			y: y,
			z: z
		};

		Atm.create(newAtm).exec(function(err, atm) {
			if (err) return res.status(500).json({ error: err });

			return res.status(201).json({ data: atm });
		});
	},

	creditOrDebit: function(req, res) {
		var atmId = '58073a14a4da8388404e9a53';
		var x = req.param('x'),
			y = req.param('y'),
			z = req.param('z');

			x = x ? (1000 * x) : 0;
			y = y ? (500 * y) : 0;
			z = z ? (100 * z) : 0;

		Atm.findOne({ id: atmId }).exec(function(err, atm) {
			if (err) return res.status(500).json({ error: err });

			if (atm) {
				var total = x + y + z;
				var newTransaction = {
					atmId: atmId,
					amount: total,
					mode: req.param('mode'),
					x: x,
					y: y,
					z: z
				};

				Transactions.create(newTransaction).exec(function(err, transaction) {
					if (err) return res.status(500).json({ error: err });

					if (req.param('mode') === 'Credit') {
						var creditAmount = atm.total + total;


						Atm.update({ id: atmId }, {
							total: creditAmount,
							x: atm.x + x,
							y: atm.y + y,
							z: atm.z + z
						}).exec(function(err, updatedAtm) {
							if (err) return res.status(500).json({ error: err });

							updatedAtm[0].message = 'Amount Credited';

							return res.status(200).json({ data: updatedAtm[0] });
						});
					} else {
						if (total < atm.total) {
							var debitAmount = atm.total - total;

							Atm.update({ id: atmId }, {
								total: debitAmount,
								x: atm.x - x,
								y: atm.y - y,
								z: atm.z - z
							}).exec(function(err, updatedAtm) {
								if (err) return res.status(500).json({ error: err });

								updatedAtm[0].message = 'Amount Debited';

								return res.status(200).json({ data: updatedAtm[0] });
							});
						} else {
							return res.status(400).json({ error: 'Enter less amount' });
						}
					}
				});
			} else {
				return res.status(400).json({ error: 'Atm not found' });
			}
		});
	}

};
