$(function() {

	var h5 = new H5();

	var windowWidth = $(window).width();
	if (windowWidth < 320) {
		windowWidth = 320;
	}

	h5.whenAddPage = function() {
		this.addComponent('slide_up', {
			bg: 'imgs/footer.png',
			css: {
				opacity: 0,
				left: 0,
				bottom: -20,
				width: '100%',
				height: '20px',
				zIndex: 999
			},
			animateIn: {
				opacity: 1,
				bottom: '-1px'
			},
			animateOut: {
				opacity: 0,
				bottom: '-20px'
			},
			delay: 500
		});
	}


	h5
		.addPage('face')
		.addComponent('this_guy', {
			width: 200,
			height: 100,
			bg: 'imgs/2.png',
			css: {
				top: '10%',
				left: '40%',
				transform: 'translate(-100%) rotate(-45deg)'
			},
			animateIn: {
				opacity: 1
			},
			animateOut: {
				opacity: 0
			},
		})
		.addComponent('arrow_face', {
			width: 60,
			height: 134,
			bg: 'imgs/arrow_face.png',
			css: {
				top: '15%',
				left: '23%',
				transform: 'rotate(-45deg)',
				animation: 'arrow-roll .8s infinite'
			},
			animateIn: {
				opacity: 1
			},
			animateOut: {
				opacity: 0
			},
		})
		.addComponent('photo_wanghao', {
			center: true,
			width: 200,
			height: 200,
			bg: 'imgs/photo_wanghao1.jpg',
			css: {
				opacity: 0,
				top: '19%',
				borderRadius: '50%',
				boxShadow: '0 0 6px 1px #000'
			},
			animateIn: {
				opacity: 1
			},
			animateOut: {
				opacity: 0
			},
		})
		.addComponent('name_wanghao', {
			center: true,
			width: 600,
			height: 50,
			text: '王皓',
			css: {
				top: '35%',
				opacity: 0,
				textAlign: 'center',
				fontSize: '24px',
				lineHeight: '50px',
				fontWeight: '500',
				fontFamily: 'Heiti',
				color: '#333',
				letterSpacing: '10px'
			},
			animateIn: {
				top: '35%',
				opacity: 1
			},
			animateOut: {
				top: '35%',
				opacity: 0
			},
			delay: 200
		})
		.addComponent('quote_words', {
			center: true,
			width: 460,
			height: 60,
			text: '认清生活真相之后依然热爱生活',
			css: {
				top: '42%',
				opacity: 0,
				textAlign: 'center',
				color: '#fff',
				fontSize: '14px',
				lineHeight: '30px',
				fontFamily: 'Heiti',
				color: '#000',
				borderTop: '2px solid #aaa',
				letterSpacing: '2px'
			},
			animateIn: {
				top: '42%',
				opacity: 1
			},
			animateOut: {
				top: '42%',
				opacity: 0
			},
			delay: 400
		})
		.addComponent('title', {
			center: true,
			width: 500,
			height: 120,
			text: 'WANT A JOB',
			css: {
				top: '50%',
				opacity: 0,
				textAlign: 'center',
				color: '#fff',
				fontSize: '32px',
				lineHeight: '60px',
				fontFamily: 'bank',
				color: '#2889a9',
				zIndex: 222
			},
			animateIn: {
				top: '50%',
				opacity: 1
			},
			animateOut: {
				top: '50%',
				opacity: 0
			},
			delay: 800
		})
		.addComponent('title', {
			center: true,
			width: 500,
			height: 100,
			text: '前端开发工程师',
			css: {
				top: '60%',
				opacity: 0,
				textAlign: 'center',
				color: '#fff',
				fontSize: '18px',
				lineHeight: '50px',
				color: '#2889a9',
				zIndex: 222
			},
			animateIn: {
				top: '55%',
				opacity: 1
			},
			animateOut: {
				top: '60%',
				opacity: 0
			},
			delay: 800
		})
		.addComponent('face_img_left', {
			width: 370,
			height: 493,
			bg: 'imgs/face_img_left.png',
			css: {
				opacity: 0,
				left: -50,
				bottom: -50
			},
			animateIn: {
				opacity: 1,
				left: 0,
				bottom: 0
			},
			animateOut: {
				opacity: 0,
				left: -50,
				bottom: -50
			},
			delay: 800
		})
		.addComponent('face_img_right', {
			width: 276,
			height: 449,
			bg: 'imgs/face_img_right.png',
			css: {
				opacity: 0,
				right: -50,
				bottom: -50
			},
			animateIn: {
				opacity: 1,
				right: 0,
				bottom: 0
			},
			animateOut: {
				opacity: 0,
				right: -50,
				bottom: -50
			},
			delay: 800
		})
		.addPage()
		.addComponent('caption', {
			text: 'THIS IS ME'
		})
		.addComponent('about_me', {
			center: true,
			width: 500,
			css: {
				opacity: 0,
				fontSize: '15px',
				lineHeight: '20px',
				top: '25%',
			},
			listData: [
				['教育背景', '四川大学（本科，土木工程）'],
				['籍贯&年龄', '四川·成都，27岁'],
				['前端经验', '2016.9～至今，自主小项目若干(详情请继续往下看)'],
				['工作经历', '2014.12～2016.8，软件销售'],
				['人生经历', '我是一个喜欢冒险并实践的人。14年在众筹网发起众筹活动，目标是独自完成从成都到上海的长途骑行。于2014年6月23日起，历时31天，沿北纬30°，穿越四川、重庆、湖北、安徽、江苏、上海等省市，共计2401Km完成目标。']
			],
			animateIn: {
				opacity: 1,
				top: '15%'
			},
			animateOut: {
				opacity: 0,
				top: '25%'
			},
			delay: 300
		})
		.addPage()
		.addComponent('caption', {
			text: 'PROJECTS'
		})
		.addComponent('about_projects', {
			center: true,
			width: 540,
			css: {
				opacity: 0,
				top: '20%'
			},
			listData: [
				['1.王皓的在线简历', '正如你现在看到的，使用 JQ 的 fullPage 插件，强化对 CSS3 动画的应用'],
				['2.移动端在线书城', '项目使用本地mock数据模拟数据库，使用Vue做动态数据绑定，使用模板组织html文件，实现包含阅读器功能的完整webApp站点。'],
				['3.网易云课堂首页', '项目模仿网页云课堂站点，从PSD文件开始分析提取通用模块，制作雪碧图，手写语义化自适应静态页面，再加入轮播、ajax请求、MD5加密登录、cookie设置等交互逻辑，实现可用站点。']
			],
			animateIn: {
				opacity: 1,
				top: '15%'
			},
			animateOut: {
				opacity: 0,
				top: '20%'
			},
			delay: 300
		})
		.addComponent('address_projects', {
			center: true,
			width: 540,
			css: {
				opacity: 0,
				top: '90%',
				fontSize: '12px',
				lineHeight: '1.2em',
				color: '#333'
			},
			text: '更多项目请访问GitHub仓库地址：',
			animateIn: {
				opacity: 1,
				top: '86%'
			},
			animateOut: {
				opacity: 0,
				top: '90%'
			},
			delay: 500
		})
		.addComponent('address_github', {
			center: true,
			width: 540,
			css: {
				opacity: 0,
				top: '92%',
				fontSize: '12px',
				lineHeight: '1.2em',
				color: '#2889a9',
				textDecoration: 'underline'
			},
			text: 'https://github.com/homer-wh?tab=repositories',
			animateIn: {
				opacity: 1,
				top: '89%'
			},
			animateOut: {
				opacity: 0,
				top: '92%'
			},
			delay: 500
		})
		.addPage()
		.addComponent('caption', {
			text: 'BASIC SKILL'
		})
		.addComponent('bar', {
			center: true,
			type: 'bar',
			width: 530,
			height: 600,
			data: [
				['PS切图', .45, '熟练', '#ff910a'],
				['HTML', .5, '熟练', '#fab867'],
				['CSS', .5, '熟练', '#ff910a'],
				['JavaScript', .45, '熟练', '#fab867'],
				['jQuery', .4, '熟练', '#ff910a']
			],
			css: {
				top: '10%',
				opacity: 0
			},
			animateIn: {
				opacity: 1,
				top: '15%',
			},
			animateOut: {
				opacity: 0,
				top: '10%',
			},
		})
		.addComponent('details', {
			center: true,
			width: 500,
			ulList: [
				'熟练制作雪碧图，了解图片格式不同特性',
				'熟悉H5语义化标签，了解画布、存储等新特性',
				'熟悉CSS3的强大选择器，对利用变换、过渡、动画属性制作特效有较深理解',
				'通读《JS高级程序设计》，理解ES、DOM、BOM之间关系，理解结构、样式、行为分离的编码行为'
			],
			css: {
				opacity: 0,
				top: '60%',
				fontSize: '14px',
				textAlign: 'left',
				color: '#666'
			},
			animateIn: {
				opacity: 1,
				top: '50%'
			},
			animateOut: {
				opacity: 0,
				top: '60%'
			},
			delay: 1300
		})
		.addPage()
		.addComponent('caption', {
			text: 'EXTEND SKILL'
		})
		.addComponent('bar', {
			type: 'bar_v',
			width: 530,
			height: 300,
			data: [
				['Less', .3, '熟悉', '#ff910a'],
				['Sass', .35, '熟悉', '#fab867'],
				['ES6', .15, '了解', '#ff910a'],
				['JSX', .1, '了解', '#fab867'],
				['EJS', .1, '了解', '#ff910a']
			],
			css: {
				top: '13%',
				opacity: 0
			},
			animateIn: {
				opacity: 1,
				top: '13%'
			},
			animateOut: {
				opacity: 0,
				top: '13%'
			},
			center: true
		})
		.addComponent('details', {
			center: true,
			width: 500,
			ulList: [
				'喜欢使用Sass的嵌套语法，书写结构更清晰的样式文件',
				'Sass&Less的变量特性，增强样式文件的可维护性，更快捷地应对需求变更',
				'通过阮一峰《ES6入门》了解其新特性，在webApp中使用promise重构异步回调',
				'JSX的简洁语法对阅读代码更友好，使用EJS模版实现文件的清晰组织'
			],
			css: {
				opacity: 0,
				top: '45%',
				fontSize: '14px',
				textAlign: 'left',
				color: '#666'
			},
			animateIn: {
				opacity: 1
			},
			animateOut: {
				opacity: 0
			},
			delay: 1300
		})
		.addPage()
		.addComponent('caption', {
			text: 'FRAMEWORK'
		})
		.addComponent('polyline', {
			type: 'polyline',
			data: [
				['Bootstrap', .4, '熟悉', '#ff7676'],
				['Vue', .2, '了解'],
				['React', .16, '了解', 'blue'],
				['JQuery', .6, '熟练']
			],
			width: 500,
			height: 360,
			center: true,
			css: {
				opacity: 0,
				top: '10%'
			},
			animateIn: {
				opacity: 1,
				top: '15%'
			},
			animateOut: {
				opacity: 0,
				top: '10%'
			},
		})
		.addComponent('details', {
			width: 500,
			center: true,
			ulList: [
				'Bootstrap: 用于开发移动设备优先的，响应式的WEB项目',
				'Vue: 通过简洁的模板语法实现动态数据双向绑定，在阅读器项目中使用了此框架',
				'React: 组件化开发模式，接管复杂的局部更新，在复杂场景下保证高性能',
				'JQuery: 消除浏览器间兼容性问题，优化HTML文档操作、事件处理、动画设计和 Ajax 交互'
			],
			css: {
				opacity: 0,
				top: '54%',
				fontSize: '14px',
				textAlign: 'left',
				color: '#666'
			},
			animateIn: {
				opacity: 1
			},
			animateOut: {
				opacity: 0
			},
			delay: 1300
		})
		.addPage()
		.addComponent('caption', {
			text: 'EDITOR'
		}) //ring
		.addComponent('ring-all', {
			type: 'ring',
			center: true,
			width: 300,
			height: 300,
			data: [
				['Sublime', 1, '#ff910a']
			],
			css: {
				top: '16%',
				opacity: 0,
				fontSize: '30px'
			},
			animateIn: {
				opacity: 1
			},
			animateOut: {
				opacity: 0
			},
		})
		.addComponent('msg', {
			text: '配合众多插件，代码效率杠杠的',
			css: {
				opacity: 0,
				top: '42%',
				textAlign: 'center',
				width: '100%',
				color: '#ff910a'
			},
			animateIn: {
				opacity: 1
			},
			animateOut: {
				opacity: 0
			},
			delay: 1000,
		})
		.addComponent('ring-1', {
			type: 'ring',
			center: true,
			width: 140,
			height: 140,
			data: [
				['Emmet', .6, '#fab867']
			],
			css: {
				top: '48%',
				opacity: 0,
				fontSize: '12px'
			},
			animateIn: {
				opacity: 1
			},
			animateOut: {
				opacity: 0
			},
			delay: 1000,
		})
		.addComponent('ring-2', {
			type: 'ring',
			width: 140,
			height: 140,
			data: [
				['Prettify', .45, '#fab867']
			],
			css: {
				left: '10%',
				top: '48%',
				opacity: 0,
				fontSize: '12px'
			},
			animateIn: {
				opacity: 1
			},
			animateOut: {
				opacity: 0
			},
			delay: 1000,
		})
		.addComponent('ring-3', {
			type: 'ring',
			width: 140,
			height: 140,
			data: [
				['Git', .36, '#fab867']
			],
			css: {
				right: '10%',
				top: '48%',
				opacity: 0,
				fontSize: '12px'
			},
			animateIn: {
				opacity: 1
			},
			animateOut: {
				opacity: 0
			},
			delay: 1000,
		})
		.addComponent('ring-3', {
			type: 'ring',
			width: 140,
			height: 140,
			data: [
				['SideBar', .34, '#fab867']
			],
			css: {
				left: '20%',
				top: '60%',
				opacity: 0,
				fontSize: '12px'
			},
			animateIn: {
				opacity: 1
			},
			animateOut: {
				opacity: 0
			},
			delay: 1000,
		})
		.addComponent('ring-3', {
			type: 'ring',
			width: 140,
			height: 140,
			data: [
				['prefixer', .26, '#fab867']
			],
			css: {
				right: '20%',
				top: '60%',
				opacity: 0,
				fontSize: '12px'
			},
			animateIn: {
				opacity: 1
			},
			animateOut: {
				opacity: 0
			},
			delay: 1000,
		})
		.addComponent('details', {
			center: true,
			width: 500,
			ulList: [
				'Emmet: 码结构，写样式，如行云流水般顺畅，同时减小了拼写错误的可能性',
				'Prettify: 代码格式化利器，查错的时候有点代码小洁癖也是一件好事',
				'Git: 让代码管理清晰明了，谨记频繁提交原则'
			],
			css: {
				opacity: 0,
				top: '73%',
				fontSize: '12px',
				textAlign: 'left',
				color: '#666'
			},
			animateIn: {
				opacity: 1
			},
			animateOut: {
				opacity: 0
			},
			delay: 1500
		})
		.addPage()
		.addComponent('caption', {
			text: 'SOLUTION'
		}) //point
		.addComponent('point', {
			type: 'point',
			center: true,
			width: 260,
			height: 260,
			data: [
				['READ', .4, '#ff910a'],
				['SEARCH', .3, '#99c1ff', '60%', '100%'],
				['ASK', .2, '#fab867', '-10%', '140%']
			],
			css: {
				top: '16%',
				fontFamily: 'bank'
			}
		})
		.addComponent('details', {
			center: true,
			width: 500,
			ulList: [
				'Read: 《JS 高级程序设计》，《CSS 魔法》，《设计模式》，框架和库文档，阮一峰、大漠等大牛博客',
				'Search: Google, Bing, MDN, W3cschool, Stack Overflow, SegmentFault, GitHub ',
				'Ask: Stack Overflow, FCC社区, SegmentFault, 框架社区'
			],
			css: {
				opacity: 0,
				top: '60%',
				fontSize: '14px',
				textAlign: 'left',
				color: '#666'
			},
			animateIn: {
				opacity: 1
			},
			animateOut: {
				opacity: 0
			},
			delay: 1500
		})
		.addPage()
		.addComponent('caption', {
			text: 'HOBBIES'
		})
		.addComponent('radar', {
			type: 'radar',
			width: 460,
			height: 460,
			data: [
				['健身', .9],
				['骑行', .8],
				['摄影', .7],
				['高尔夫', .6],
				['桌球', .5]
			],
			css: {
				top: '20%',
				opacity: 0
			},
			animateIn: {
				opacity: 1,
				top: '20%',
			},
			animateOut: {
				opacity: 0,
				top: '20%',
			},
			center: true,
		})
		.addComponent('details', {
			center: true,
			width: 500,
			ulList: [
				'动手能力较强，对细节比较敏感，喜欢钻研新事物',
				'运动培养了比较坚韧的性格，喜欢突破自己的舒适区，获得提升'
			],
			css: {
				opacity: 0,
				top: '70%',
				fontSize: '14px',
				textAlign: 'left',
				color: '#666'
			},
			animateIn: {
				opacity: 1
			},
			animateOut: {
				opacity: 0
			},
			delay: 1500
		})
		.addPage('tail')
		.addComponent('back', {
			width: 64,
			height: 61,
			bg: 'imgs/tail_back1.png',
			center: true,
			onclick: function() {
				$.fn.fullpage.moveTo(1)
			}
		})
		.addComponent('back1', {
			width: 40,
			height: 40,
			text: 'UP',
			center: true,
			css: {
				top: '11%',
				fontSize: '14px',
				color: '#aaa',
				fontFamily: 'bank'
			},
			onclick: function() {
				$.fn.fullpage.moveTo(1)
			}
		})
		.addComponent('thank_you', {
			center: true,
			width: 600,
			height: 100,
			text: 'Thank you for your time!',
			css: {
				top: '24%',
				opacity: 0,
				fontFamily: 'bank',
				fontSize: '40px',
				textAlign: 'center'
			},
			animateIn: {
				opacity: 1
			},
			animateOut: {
				opacity: 0
			}
		})
		.addComponent('slogan', {
			width: 200,
			height: 46,
			text: 'Contact Me',
			css: {
				top: '58%',
				left: '0%',
				opacity: 0,
				fontWeight: 'bold'
			},
			animateIn: {
				opacity: 1,
				left: '20%'
			},
			animateOut: {
				opacity: 0,
				left: '0%'
			},
			delay: 800
		})
		.addComponent('text', {
			center: true,
			width: 480,
			height: 294,
			css: {
				opacity: 0,
				padding: '15px 10px 10px 10px',
				color: '#333',
				fontSize: '15px',
				lineHeight: '18px',
				textAlign: 'justify',
				top: '70%'
			},
			listData: [
				['电话', '13585955985'],
				['邮箱', 'hema-wh@qq.com'],
				['GitHub', 'https://github.com/homer-wh']
			],
			animateIn: {
				opacity: 1,
				top: '60%'
			},
			animateOut: {
				opacity: 0,
				top: '70%'
			},
			delay: 800
		})
		.loader(['imgs/tail_back.png', 'imgs/tail_share.png', 'imgs/tail_slogan.png']);

});

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

	/* H5对象初始化呈现 */
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

		if (this._images === undefined) { //  第一次进入

			this._images = (images || []).length;
			this._loaded = 0;


			window[id] = this; //   把当前对象存储在全局对象 window 中，用来进行某个图片加载完成之后的回调


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

/* H5ComponentBase Start */

/* 基本图文组件对象 */

var H5ComponentBase = function(name, cfg) {
	var cfg = cfg || {};
	var id = ('h5_c_' + Math.random()).replace('.', '_');

	// 把当前的组建类型添加到样式中进行标记
	var cls = ' h5_component_' + cfg.type;
	var component = $('<div class="h5_component ' + cls + ' h5_component_name_' + name + '" id="' + id + '">');

	cfg.text && component.text(cfg.text);
	cfg.width && component.width(cfg.width / 2);
	cfg.height && component.height(cfg.height / 2);

	cfg.css && component.css(cfg.css);
	cfg.bg && component.css('backgroundImage', 'url(' + cfg.bg + ')');

	// 如果是列表内容则添加列表
	if (cfg.listData) {
		var dlList = $('<dl class="dlList">');
		$.each(cfg.listData, function(idx, item) {
			var dtTitle = $('<dt class="dtTitle">');
			var ddText = $('<dd class="ddText">');

			dtTitle.text(item[0]);
			ddText.text(item[1]);

			dlList.append(dtTitle).append(ddText);

		})
		component.append(dlList);
	}

	// 无序列表项
	if (cfg.ulList) {
		var ulList = $('<ul class="ulList">');
		$.each(cfg.ulList, function(idx, item) {
			var li = $('<li class="liText">');

			li.text(item);

			ulList.append(li);

		})
		component.append(ulList);
	}

	if (cfg.center === true) {
		component.css({
			marginLeft: (cfg.width / 4 * -1) + 'px',
			left: '50%'
		})
	}
	//  ... 很多自定义的参数
	if (typeof cfg.onclick === 'function') {
		component.on('click', cfg.onclick);
	}


	component.on('onLoad', function() {

		// (1)支持relativeTo参数（修改 DOM 结构实现方法）
		if (cfg.relativeTo) {
			var parent = component.parent().find('.h5_component_name_' + cfg.relativeTo);
			if (parent.size()) {
				component.appendTo(parent);
			}
			cfg.relativeTo = false;
		}

		setTimeout(function() {
			component.addClass(cls + '_load').removeClass(cls + '_leave');
			cfg.animateIn && component.animate(cfg.animateIn);
		}, cfg.delay || 0)

		return false;
	})
	component.on('onLeave', function() {

		setTimeout(function() {
			component.addClass(cls + '_leave').removeClass(cls + '_load');
			cfg.animateOut && component.animate(cfg.animateOut);
		}, cfg.delay || 0)
		return false;
	})


	return component;
}

/* H5ComponentBase End */

/* H5ComponentBar End */

/* 柱图组件对象 */

var H5ComponentBar = function(name, cfg) {
	var component = new H5ComponentBase(name, cfg);

	$.each(cfg.data, function(idx, item) {

		var line = $('<div class="line">');
		var name = $('<div class="name">');
		var rate = $('<div class="rate">');
		var per = $('<div class="per">');

		var width = item[1] * 100 + '%';

		var rateText = item[2];

		var bgStyle = '';
		if (item[3]) {
			bgStyle = 'style="background-color:' + item[3] + '"';
		}

		rate.html('<div class="bg" ' + bgStyle + '></div>');

		rate.css('width', width);

		name.text(item[0]);

		per.text(rateText);

		line.append(name).append(rate).append(per);

		component.append(line);
	});

	return component;
}

/* H5ComponentBar End */

/* H5ComponentBar_v Start */

/* 垂直柱图组件对象 */

var H5ComponentBar_v = function(name, cfg) {

	//  任务二：(1) 完成 component 的初始化定义（补全 var component = ???）
	var component = new H5ComponentBar(name, cfg);

	//  任务二：(2) 完成 width 每个柱图中项目的宽度计算。（补全 var width = ???）
	var width = (100 / cfg.data.length) >> 0;
	component.find('.line').width(width + '%');

	$.each(component.find('.rate'), function() {
		var w = $(this).css('width');
		//  任务二：(3) 把进度区的宽度重设为高度，并且取消原来的宽度
		$(this).height(w).width('');
	});

	$.each(component.find('.per'), function() {
		//  任务二：(4) 重新调整 DOM 结构，把百分比数值(.per)添加到 进度区 (.rate)中，和色块元素(.bg)同级。提示，获得 进度区 元素：$(this).prev() 
		$(this).appendTo($(this).prev());
	})

	return component;
}

/* H5ComponentBar_v End */

/* H5ComponentPie Start */

/* 饼图组件对象 */

var H5ComponentPie = function(name, cfg) {
	var component = new H5ComponentBase(name, cfg);

	//  绘制网格线 - 背景层
	var w = cfg.width;
	var h = cfg.height;

	//  加入一个画布（网格线背景）
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	$(cns).css('zIndex', 1);
	component.append(cns);

	var r = w / 2;

	//  加入一个底图层
	ctx.beginPath();
	ctx.fillStyle = '#eee';
	ctx.strokeStyle = '#eee';
	ctx.lineWidth = 1;
	ctx.arc(r, r, r, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();

	//  绘制一个数据层
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	$(cns).css('zIndex', 2);
	component.append(cns);

	var colors = ['red', 'green', 'blue', '#a00', 'orange']; //  备用颜色
	var sAngel = 1.5 * Math.PI; //  设置开始的角度在 12 点位置
	var eAngel = 0; //  结束角度
	var aAngel = Math.PI * 2; //  100%的圆结束的角度 2pi = 360


	var step = cfg.data.length;
	for (var i = 0; i < step; i++) {

		var item = cfg.data[i];
		var color = item[2] || (item[2] = colors.pop());

		eAngel = sAngel + aAngel * item[1];

		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.strokeStyle = color;
		ctx.lineWidth = .1;

		ctx.moveTo(r, r);
		ctx.arc(r, r, r, sAngel, eAngel);
		ctx.fill();
		ctx.stroke();
		sAngel = eAngel;


		//  加入所有的项目文本以及百分比

		var text = $('<div class="text">');
		text.text(cfg.data[i][0]);
		// var per =  $('<div class="per">');
		// per.text( cfg.data[i][1]*100 +'%'  );
		// text.append(per);

		var x = r + Math.sin(.5 * Math.PI - sAngel) * r;
		var y = r + Math.cos(.5 * Math.PI - sAngel) * r;

		// text.css('left', r / 2);
		// text.css('top', r / 2);

		if (x > w / 2) {
			text.css('left', x / 2);
		} else {
			text.css('left', x / 2).css('transform', 'translateX(-100%)');
			// text.css('right', (w - x) / 2);
		}
		if (y > h / 2) {
			text.css('top', y / 2);
		} else {
			// text.css('top', y / 2);
			text.css('bottom', (h - y) / 2);
		}
		if (cfg.data[i][2]) {
			text.css('color', cfg.data[i][2]);
		}
		text.css('opacity', 0);
		component.append(text);

	}

	//  加入一个蒙板层
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	$(cns).css('zIndex', 3);
	component.append(cns);


	ctx.fillStyle = '#eee';
	ctx.strokeStyle = '#eee';
	ctx.lineWidth = 1;


	//  生长动画

	var draw = function(per) {

		ctx.clearRect(0, 0, w, h);

		ctx.beginPath();

		ctx.moveTo(r, r);

		if (per <= 0) {
			ctx.arc(r, r, r, 0, 2 * Math.PI);
			component.find('.text').css('opacity', 0)
		} else {
			ctx.arc(r, r, r, sAngel, sAngel + 2 * Math.PI * per, true);
		}

		ctx.fill();
		ctx.stroke();

		if (per >= 1) {
			component.find('.text').css('opacity', 1);
			ctx.clearRect(0, 0, w, h);
		}
	}
	draw(0);
	component.on('onLoad', function() {
		//  饼图生长动画
		var s = 0;
		for (i = 0; i < 100; i++) {
			setTimeout(function() {
				s += .01;
				draw(s);
			}, i * 10 + 500);
		}
	});
	component.on('onLeave', function() {
		//  饼图退场动画
		var s = 1;
		for (i = 0; i < 100; i++) {
			setTimeout(function() {
				s -= .01;
				draw(s);
			}, i * 10);
		}
	});

	return component;
}

/* H5ComponentPie End */

/* H5ComponentRing Start */

/* 环图组件对象 */

var H5ComponentRing = function(name, cfg) {


	if (cfg.data.length > 1) { //  环图应该只有一个数据
		//  把数据格式化为只有一项，例如 a = [ [1] , [2] , [3] ] 格式化为： a=[ [1] ]
		cfg.data = [cfg.data[0]];
	}

	//  重设配置中的 type 参数，不仅利用 H5ComponentPie 构建 DOM 结构和 JS 逻辑，也使用其 CSS 样式定义
	cfg.type = 'pie';
	var component = new H5ComponentPie(name, cfg);

	//  修正组件的样式，以支持在样式文件中组件的样式定义 .h5_component_ring 相关样式能生效
	component.addClass('h5_component_ring');


	var mask = $('<div class="mask">');

	// 把创建好的遮罩元素添加到组件中
	component.append(mask);

	var text = component.find('.text');

	text.attr('style', '');
	if (cfg.data[0][2]) {
		text.css('color', cfg.data[0][2]);
	}
	//  在遮罩元素( .mask ) 中添加文本信息
	mask.append(text);

	return component;
}

/* H5ComponentRing End */

/* H5ComponentPoint Start */

/* 散点图表组件对象 */

var H5ComponentPoint = function(name, cfg) {
	var component = new H5ComponentBase(name, cfg);

	var base = cfg.data[0][1]; //  以第一个数据的 比例为大小的 100%

	//   输出每个 Point
	$.each(cfg.data, function(idx, item) {

		var point = $('<div class="point point_' + idx + '" >');

		var name = $('<div class="name">' + item[0] + '</div>');

		// name.append(rate);
		point.append(name);


		var per = (item[1] / base * 100) + '%';

		point.width(per).height(per);

		if (item[2]) {
			point.css('background-color', item[2]);
		}


		if (item[3] !== undefined && item[4] !== undefined) {
			point.css('left', item[3]).css('top', item[4]);
			// 暂存left、top到元素上
			point.data('left', item[3]).data('top', item[4]);

		}

		// 设置zIndex、重设位置
		point.css('zIndex', 100 - idx);
		point.css('left', 0).css('top', 0);


		point.css('transition', 'all 1s ' + idx * .5 + 's')
		component.append(point);
	});

	//  onLoad之后取出暂存的left、top 并且附加到 CSS 中
	component.on('onLoad', function() {
		component.find('.point').each(function(idx, item) {
			$(item).css('left', $(item).data('left')).css('top', $(item).data('top'));
		})
	});
	// onLeave之后，还原初始的位置
	component.on('onLeave', function() {
		component.find('.point').each(function(idx, item) {
			$(item).css('left', 0).css('top', 0);
		})
	})

	component.find('.point').on('click', function() {

		component.find('.point').removeClass('point_focus');
		$(this).addClass('point_focus');

		return false;
	}).eq(0).addClass('point_focus')

	return component;
}

/* H5ComponentPoint End */

/* H5ComponentPolyline Start */

/* 折线图组件对象 */

var H5ComponentPolyline = function(name, cfg) {
	var component = new H5ComponentBase(name, cfg);

	/* 背景层 绘制网格线 */
	var w = cfg.width;
	var h = cfg.height;

	// 加入一个画布（网格线背景）
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	component.append(cns);


	// 水平网格线 10份
	var step = 10;
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#aaa';

	window.ctx = ctx;
	for (var i = 0; i < step + 1; i++) {

		var y = h / step * i;

		ctx.moveTo(0, y);

		ctx.lineTo(w, y);
	}

	// 垂直网格线（根据项目个数分）
	step = cfg.data.length - 1;
	var text_w = (w / step) >> 0;
	for (var i = 0; i < step + 1; i++) {
		var x = (w / step) * i;

		ctx.moveTo(x, 0);

		ctx.lineTo(x, h);
		if (cfg.data[i]) {
			var text = $('<div class="text">');
			var pro = $('<div class="pro">');
			text.text(cfg.data[i][0]);
			pro.text(cfg.data[i][2]);
			text.css('width', text_w).css('left', (x - text_w) / 2);
			pro.css('width', text_w).css('left', 0);
			text.append(pro);
			component.append(text);

		}

	}
	ctx.stroke();

	// 新建画布，绘制折线数据
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	component.append(cns);

	/**
	 * 绘制折线 对应的数据 以及阴影
	 * @param  {floot} per 0到1之间到数据，会根据这个值绘制最终数据对应的中间状态
	 * @return {DOM}     
	 */
	var draw = function(per) {

		// 清空画布
		ctx.clearRect(0, 0, w, h);


		ctx.beginPath();
		ctx.lineWidth = 3;
		ctx.strokeStyle = '#ff910a';
		var x = 0;
		var y = 0;
		var row_w = w / (cfg.data.length - 1);
		// 画点
		for (var i in cfg.data) {
			var item = cfg.data[i];

			x = row_w * i;
			y = h - (item[1] * h * per);

			ctx.moveTo(x, y);
			ctx.arc(x, y, 5, 0, 2 * Math.PI);
		}

		// 连线
		ctx.moveTo(0, h - (cfg.data[0][1] * h * per));

		for (var i in cfg.data) {
			var item = cfg.data[i];
			var x = row_w * i;
			var y = h - (item[1] * h * per);
			ctx.lineTo(x, y);
		}
		ctx.stroke();

		ctx.lineWidth = 1;
		ctx.strokeStyle = 'rgba(255, 136, 120, 0)';
		// 绘制阴影
		ctx.lineTo(x, h);
		ctx.lineTo(0, h);
		ctx.fillStyle = 'rgba(250, 184, 103, 0.2)';
		ctx.fill();

		ctx.stroke();
	}

	// 入场动画
	component.on('onLoad', function() {
		var s = 0;
		for (var i = 0; i < 100; i++) {
			setTimeout(function() {
				s += .01;
				draw(s);
			}, i * 10 + 500)
		}
	});

	// 退场动画
	component.on('onLeave', function() {
		var s = 1;
		for (var i = 0; i < 100; i++) {
			setTimeout(function() {
				s -= .01;
				draw(s);
			}, i * 10)
		}
	});


	return component;
}

/* H5ComponentPolyline End */

/* H5ComponentRadar Start */

/* 雷达图组件对象 */

var H5ComponentRadar = function(name, cfg) {
	var component = new H5ComponentBase(name, cfg);

	/* 背景层 绘制网格线 */
	var w = cfg.width;
	var h = cfg.height;

	// 加入一个画布（网格线背景）
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	component.append(cns);

	var r = w / 2 - 5;
	var step = cfg.data.length;

	ctx.beginPath();
	ctx.arc(r + 5, r + 5, 5, 0, 2 * Math.PI);
	ctx.stroke();

	var isBlue = false;

	for (var s = 10; s > 0; s--) {
		ctx.beginPath();
		for (var i = 0; i < step; i++) {
			var rad = (2 * Math.PI / 360) * (360 / step) * i;
			var x = r + 5 + Math.sin(rad) * r * (s / 10);
			var y = r + 5 + Math.cos(rad) * r * (s / 10);
			ctx.lineTo(x, y);
		}
		ctx.closePath();
		ctx.fillStyle = (isBlue = !isBlue) ? '#99c0ff' : '#f1f9ff';
		ctx.fill();
	}

	// 绘制伞骨
	for (var i = 0; i < step; i++) {
		var rad = (2 * Math.PI / 360) * (360 / step) * i;
		var x = r + 5 + Math.sin(rad) * r;
		var y = r + 5 + Math.cos(rad) * r;
		ctx.moveTo(r + 5, r + 5);
		ctx.lineTo(x, y);

		// 输出项目文字
		var text = $('<div class="text">');
		text.text(cfg.data[i][0]);

		text.css('transition', 'all .5s ' + i * .1 + 's');

		// text.css('left', x / 2).css('top', y / 2);
		if (x > w / 2) {
			text.css('left', x / 2 + 3);
		} else {
			text.css('right', (w - x) / 2 + 3);
		}

		if (y > h / 2) {
			text.css('top', y / 2 + 3);
		} else {
			text.css('bottom', (h - y) / 2 + 3);
		}

		if (cfg.data[i][2]) {
			text.css('color', cfg.data[i][2]);
		}

		text.css('opacity', 0);

		component.append(text);
	}
	ctx.strokeStyle = '#e0e0e0';
	ctx.stroke();

	// 绘制数据层
	// 加入一个数据层画布
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	component.append(cns);

	ctx.strokeStyle = '#f00';
	var draw = function(per) {

		if (per >= 1) {
			component.find('.text').css('opacity', 1);
		}

		if (per <= .5) {
			component.find('.text').css('opacity', 0);
		}

		ctx.clearRect(0, 0, w, h);
		// 输出数据的折线
		for (var i = 0; i < step; i++) {
			var rad = (2 * Math.PI / 360) * (360 / step) * i;
			var rate = cfg.data[i][1] * per;
			var x = r + 5 + Math.sin(rad) * r * rate;
			var y = r + 5 + Math.cos(rad) * r * rate;

			ctx.lineTo(x, y);
		}
		ctx.closePath();
		ctx.stroke();


		// 输出数据的点
		ctx.fillStyle = '#ff7676';
		for (var i = 0; i < step; i++) {
			var rad = (2 * Math.PI / 360) * (360 / step) * i;
			var rate = cfg.data[i][1] * per;
			var x = r + 5 + Math.sin(rad) * r * rate;
			var y = r + 5 + Math.cos(rad) * r * rate;

			ctx.beginPath();
			ctx.arc(x, y, 5, 0, 2 * Math.PI);
			ctx.fill();
			ctx.closePath();
		}


	}

	// 入场动画
	component.on('onLoad', function() {
		var s = 0;
		for (var i = 0; i < 100; i++) {
			setTimeout(function() {
				s += .01;
				draw(s);
			}, i * 10 + 500)
		}
	});

	// 退场动画
	component.on('onLeave', function() {
		var s = 1;
		for (var i = 0; i < 100; i++) {
			setTimeout(function() {
				s -= .01;
				draw(s);
			}, i * 10)
		}
	});


	return component;
}

/* H5ComponentRadar End */