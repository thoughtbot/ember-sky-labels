module.exports = {
  description: 'Copy SkyLabels SCSS into the host application',

  afterInstall: function() {
    var importStatement = '@import "sky-labels";';

    return this.insertIntoFile('app/styles/app.scss',  importStatement);
  },

  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },
};
