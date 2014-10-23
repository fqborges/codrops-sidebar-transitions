Package.describe({
  summary: "codrops' sidebar transitions effects packaged for meteor",
  version: '0.1.0',
  name: "fqborges:codrops-sidebar-transitions"
});

Package.onUse(function (api) {

  api.add_files([
    'component.css',
    'modernizr.custom.js',
    'classie.js',
    'sidebarEffects.js',
  ], ['client']);

  api.export(['SidebarMenuEffects']);

});
