var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var GoogleChart = new keystone.List('GoogleChart', {
	autokey: { from: 'meta', path: 'key', unique: true },
});

GoogleChart.add({
	value: { type: Number, required: true, default: 0 },
  meta: { type: String }
});

GoogleChart.register();
