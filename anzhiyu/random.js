var posts=["2023/03/01/1/","2023/05/12/10/","2023/05/12/11/","2023/05/24/14/","2023/05/25/15/","2023/05/25/16/","2023/05/27/17/","2023/05/15/12/","2023/05/19/13/","2023/05/29/18/","2023/05/30/19/","2023/05/31/20/","2023/06/08/22/","2023/06/10/23/","2023/06/05/21/","2023/06/14/24/","2023/03/24/2/","2023/06/21/26/","2023/06/23/27/","2023/06/24/28/","2023/07/01/29/","2023/06/20/25/","2023/03/08/3/","2023/03/27/4/","2023/04/01/6/","2023/03/30/5/","2023/05/05/8/","2023/05/11/9/","2023/04/04/7/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Jialuo Chen","hundredSuffix":"","link":"https://chenjialuo.com/","avatar":"https://chenjialuo.com/wp-content/uploads/2023/04/e.png","descr":"陈家洛的个人主页"},{"name":"天蒼人頡","hundredSuffix":"","link":"https://ejsoon.win/","avatar":"https://ejsoon.win/wp-content/uploads/2022/01/alogo.svg","descr":"發掘好玩事物"},{"name":"小乔的博客","hundredSuffix":"","link":"https://zyq.today/","avatar":"https://zyq.today/z.png","descr":"Best year in spring,best day in morning"},{"name":"醉里博客","hundredSuffix":"","link":"https://202271.xyz/","avatar":"https://202271.xyz/images/uploads/android-chrome-192x192.png","descr":"小豪的个人博客"},{"name":"博客","hundredSuffix":"","link":"https://blog.zceee.com/","avatar":"/img/t/hexo/logo.png","descr":"终成博客","siteshot":"/img/t/hexo/logo.png"}];
    var refreshNum = 1;
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };