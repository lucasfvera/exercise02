var coll = document.getElementsByClassName('collapsible');
var cont = document.getElementsByClassName('content-collapsible');
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener('click', function () {
		this.classList.toggle('active');
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
			content.style.borderBottom = '0px solid hsl(240, 5%, 91%)';
			// content.style.display = 'none';
		} else {
			content.style.maxHeight = content.scrollHeight + 'px';
			content.style.borderBottom = '1px solid hsl(240, 5%, 91%)';
			// content.style.display = 'block';
		}
	});
}
