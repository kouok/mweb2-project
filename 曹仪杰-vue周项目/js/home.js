var banner = new Vue({
	el:"#app",
	data:{
		banner:"",
		rmcy:"",
		rmyg:"",
		cnxh:""
	},
	methods:{

	},
	computed:{},
	watch:{},
	components:{
		//banner组件
		"banner":{
			props:["banner"],
		    template:`
		            <div id="slideBox" class="slideBox">

					    <div class="bd">
					        <ul id="banner">
					            <li style="display: table-cell; vertical-align: top;" v-for="item,i in banner" >
									<a class="pic" href="#"><img :src="item.image"></a>
								</li>
					        </ul>            
					    </div>

					    <div class="hd">
					        <ul>
					            <li v-for="item,i in banner"></li>
					         </ul>
					     </div>

					</div>
            		`
        },
        //热门超英组件
        "rmcy":{
        	props:["rmcy"],
        	template:`
		        	<div class="rmcy">
						<p class="biaoti"><img src="img/ia_100000053.png"><span>热门超英</span></p>
						<ul class="rmcy1">
							<li v-for="item,i in rmcy">
								<p><img :src="item.cover" class="fenm"></p>
								<p class="cutFont fenm2">{{item.name}}</p>
								<p class="fenm3">
									<img src="img/ia_100000092.png">
									<img src="img/ia_100000092.png">
									<img src="img/ia_100000092.png">
									<img src="img/ia_100000092.png">
									<img src="img/ia_100000093.png">
									<span>{{item.score}}</span>
								</p>
							</li>
						</ul>
					</div>
	        	`
        },
        //热门预告组件
        "rmyg":{
        	props:["rmyg"],
        	template:`
	        	<div class="rmyg">
					<p class="biaoti"><img src="img/ia_100000054.png"><span>热门预告</span></p>
					<ul id="shiping">
						<li v-for="item,i in rmyg">
							<video controls :src="item.trailer" :poster="item.poster" loop="loop"></video>	
						</li>
					</ul>
				</div>
        	`
        },
        "cnxh":{
        	props:["cnxh"],
        	template:`
        		<div class="cnxh">
					<p class="biaoti"><img src="img/ia_100000059.png"><span>猜你喜欢</span></p>
					<ul class="cnxh1">
						<li v-for="item,i in cnxh">
							<div class="cnxh2"><img :src="item.cover"></div>
							<div class="cnxh3">
								<h2 class="cutFont">{{item.name}}</h2>
								<p>
									<img src="img/ia_100000092.png">
									<img src="img/ia_100000092.png">
									<img src="img/ia_100000092.png">
									<img src="img/ia_100000092.png">
									<img src="img/ia_100000093.png">
								</p>
								<p>{{item.basicInfo}}</p>
								<p>{{item.releaseDate}}</p>
							</div>
							<div class="cnxh4">
								<p><img src="img/ia_100000094.png" /></p>
								<p>赞一下</p>
							</div>
						</li>
					</ul>
				</div>
        	`
        }
	},
	created(){
        var that=this;
        $.ajax({
        	type:"post",
            url:"https://www.imovietrailer.com/superhero/index/carousel/list?qq=947876",
            success:function(res){
               that.banner=res.data;
        	}
        });
        $.ajax({
        	type:"post",
            url:"https://www.imovietrailer.com/superhero/index/movie/hot?type=superhero&&qq=947876",
            success:function(res){
               that.rmcy=res.data;
        	}
        });
        $.ajax({
        	type:"post",
            url:"https://www.imovietrailer.com/superhero/index/movie/hot?type=trailer&&qq=947876",
            success:function(res){
               that.rmyg=res.data;
        	}
        });
        $.ajax({
        	type:"post",
            url:"https://www.imovietrailer.com/superhero/index/guessULike?qq=947876",
            success:function(res){
               that.cnxh=res.data;
        	}
        });
    },
    updated(){
    	TouchSlide({ 
			slideCell:"#slideBox",
			titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
			mainCell:".bd ul", 
			effect:"leftLoop", 
			autoPage:true,//自动分页
			autoPlay:true //自动播放
		});
    }
});