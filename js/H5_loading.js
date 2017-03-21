/* H5 Start */

var H5 = function() {
	this.id = ('h5_' + Math.random()).replace('.', '_');
	this.el = $('<div class="h5" id="' + this.id + '">').hide();

	this.page = [];

	$('body').append(this.el);


	/**
	 * 新增一个页面
	 * @param {string} name 组件的名称，会加入到 ClassName 中
	 * @param {type} text 页内到默认文本
	 * @return {H5} H5对象， 可以重复使用H5对象支持的方法
	 */
	this.addPage = function(name, text) {
		var page = $('<div class="h5_page section">');

		if (name != undefined) {
			page.addClass('h5_page_' + name);
		}
		if (text != undefined) {
			page.text(text);
		}
		this.el.append(page);

		this.page.push(page);

		return this;
	}

	/* 新增一个组件 */
	this.addComponent = function(name, cfg) {
		var cfg = cfg || {};
		/* $.extend() 如果第二个参数中含有和第一个参数中相同的数据结构，那么第二个会覆盖第一个 */
		cfg = $.extend({
			type: 'base'
		}, cfg);

		var component;
		var page = this.page.slice(-1)[0];

		switch (cfg.type) {
			case 'point':
				component = new H5ComponentPoint(name, cfg);
				break;
			case 'bar':
				component = new H5ComponentBar(name, cfg);
				break;
			case 'bar_v':
				component = new H5ComponentBar_v(name, cfg);
				break;
			case 'radar':
				component = new H5ComponentRadar(name, cfg);
				break;
			case 'pie':
				component = new H5ComponentPie(name, cfg);
				break;
			case 'polyline':
				component = new H5ComponentPolyline(name, cfg);
				break;
			case 'ring':
				component = new H5ComponentRing(name, cfg);
				break;

			default:
				component = new H5ComponentBase(name, cfg);
		}

		page.append(component);
		return this;
	}

	/* H5对象初始化 */
	this.loader = function() {
		this.el.fullpage({
			onLeave: function(index, nextIndex, direction) {
				$(this).find('.h5_component').trigger('onLeave');
			},
			afterLoad: function(auchorLink, index) {
				$(this).find('.h5_component').trigger('onLoad');
			}
		});
		this.page[0].find('.h5_component').trigger('onLoad');
		this.el.show();
	}

	return this;
}

/* H5 End */


/* H5_loading Start */
var H5_loading = function(images, firstPage) {

		var id = this.id;

		if (this._images === undefined) {

			this._images = (images || []).length;
			this._loaded = 0;
			window[id] = this;

			for (s in images) {
				var item = images[s];
				var img = new Image;
				img.onload = function() {
					window[id].loader();
				}
				img.src = item;
			}

			$('#rate').text('0%');
			return this;

		} else {
			this._loaded++;
			$('#rate').text(((this._loaded / this._images * 100) >> 0) + '%');

			if (this._loaded < this._images) {
				return this;
			}
		}

		window[id] = null;

		this.el.fullpage({
			onLeave: function(index, nextIndex, direction) {
				$(this).find('.h5_component').trigger('onLeave');
			},
			afterLoad: function(anchorLink, index) {
				$(this).find('.h5_component').trigger('onLoad');
			}
		});
		this.page[0].find('.h5_component').trigger('onLoad');
		this.el.show();
		if (firstPage) {
			$.fn.fullpage.moveTo(firstPage);
		}
	}
	/* H5_loading End */