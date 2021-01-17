console.log('im in main.js');

var ID = 1;

function DeleteOnClick(id) {
	console.log("delete some data");
    node = document.getElementById(id);
    node.parentNode.removeChild(node);
    // let li = node.parentNode.parentNode;
    // li.parentNode.removeChild(li);
}

function Add() {
	console.log("add");
	let tr = document.createElement('tr');
	let pkts      = document.createElement('td');
	let pkts_txt = document.createTextNode("the value of pkts");
	let bytes    = document.createElement('td');
	let bytes_txt = document.createTextNode("the value of bytes");
	let source      = document.createElement('td');
	let source_txt = document.createTextNode("the position of source");
	let destination         = document.createElement('td');
	let destination_txt = document.createTextNode("the position of destinations");
	let omit     = document.createElement('td');
	let button        = document.createElement('button');

	tr.setAttribute('id', ID);
	button.setAttribute('id', ID);
	ID++;
	button.setAttribute("onClick", "DeleteOnClick(id)");
	button.innerHTML = "Delete";

	tr.appendChild(pkts);
	tr.appendChild(bytes);
	tr.appendChild(source);
	tr.appendChild(destination);
	tr.appendChild(omit);
	pkts.appendChild(pkts_txt);
	bytes.appendChild(bytes_txt);
	source.appendChild(source_txt);
	destination.appendChild(destination_txt);
	omit.appendChild(button);

	document.getElementById('table').appendChild(tr);

}