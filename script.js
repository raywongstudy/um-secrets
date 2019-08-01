var header = new Vue({
  el:"#header",
  data:{
    navBarShow : false,
  },
  methods:{
    fullScreen(){
      //enter fullScreen       
      let elem = document.querySelector('html')
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }else if(elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      }else if(elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
      }else if(elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
      //exit fullScreen 
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
    }
  }


})

var main = new Vue({
  el:'#main',
  data:{
    loading: false,
    all_posts:data,
    post_detail: false,
    post:{},
  },
  created(){
    this.loading = false
  },
  mounted(){
    this.loading = true
  },
  methods:{
    open_detail:function(post){
      this.post_detail = !this.post_detail
      this.post = post
    },
    back_detail:function(){
      this.post_detail = !this.post_detail
      this.post = {}
    }
  }
})
