js

var tree = new FamilyTree (document.getElementById("tree"), {
  nodes: personen,
  nodeBinding: {
    field_0: "name",
    field_1: "geb"
  },
  enableSearch: true, 
  zoom: true,
  nodeMouseClick: FamilyTree.action.details
});
