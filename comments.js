function latest_recent_comments(a){var e;e='<ul class="latest_recent_comments">';for(var t=0;t<numComments;t++){var r,o,i,n;if(t==a.feed.entry.length)break;e+="<li>";for(var s=a.feed.entry[t],l=0;l<s.link.length;l++)"alternate"==s.link[l].rel&&(r=s.link[l].href);for(var v=0;v<s.author.length;v++)o=s.author[v].name.$t,i=s.author[v].gd$image.src;i=-1!=i.indexOf("/s1600/")?i.replace("/s1600/","/s"+avatarSize+"-c/"):-1!=i.indexOf("/s220/")?i.replace("/s220/","/s"+avatarSize+"-c/"):-1!=i.indexOf("/s512-c/")&&0!=i.indexOf("http:")?"http:"+i.replace("/s512-c/","/s"+avatarSize+"-c/"):-1!=i.indexOf("blogblog.com/img/b16-rounded.gif")?"http://1.bp.blogspot.com/-NAMZejK41So/T0evV0_SSUI/AAAAAAAACso/ol6-PKkZipA/s"+avatarSize+"/md_blogger_logo.png":-1!=i.indexOf("blogblog.com/img/openid16-rounded.gif")?"http://4.bp.blogspot.com/-k0U7v1WpNRs/T0euKMHQi_I/AAAAAAAACsg/DNqzinhvxt4/s"+avatarSize+"/md_openid_logo.png":-1!=i.indexOf("blogblog.com/img/blank.gif")?-1!=defaultAvatar.indexOf("gravatar.com")?defaultAvatar+"&s="+avatarSize:defaultAvatar:i,1==showAvatar&&(e+='<div class="avatarImage '+(n=1==roundAvatar?"avatarRound":"")+'"><img class="'+n+'" src="'+i+'" alt="'+o+'" width="'+avatarSize+'" height="'+avatarSize+'"/></div>'),e+='<a href="'+r+'">'+o+"</a>";var d=s.content.$t.replace(/(<([^>]+)>)/gi,"");""!=d&&d.length>characters?(d=d.substring(0,characters),d+="&hellip;",1==showMorelink&&(d+='<a href="'+r+'">'+moreLinktext+"</a>")):d=d,e+="<span>"+d+"</span>",e+="</li>"}e+="</ul>";e+="",document.write(e)}var numComments=numComments||5,avatarSize=avatarSize||60,characters=characters||40,defaultAvatar=defaultAvatar||"http://www.gravatar.com/avatar/?d=mm",moreLinktext=moreLinktext||" More &raquo;",showAvatar=void 0===showAvatar||showAvatar,showMorelink=void 0!==showMorelink&&showMorelink,roundAvatar=void 0===roundAvatar||roundAvatar,hideCredits=void 0!==hideCredits&&roundAvatar;