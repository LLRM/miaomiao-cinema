<template>
    <div class="cinema_body">
		<!-- <ul  class="msgHtmlBox" v-html='movieList'></ul> -->
		<ul>
			<li>
				<div>
					<span>深影国际嘉之华中心影城</span>
					<span class="q"><span class="price">39</span> 元起</span>
				</div>
				<div class="address">
					<span>福田区福中一路2016号深圳音乐厅旁首层</span>
					<span>28.1km</span>
				</div>
				<div class="card">
					<div class="allowRefund bl">退</div>
                  	<div class="endorse bl">改签</div>
                  	<div class="snack">小吃</div>
				</div>
			</li>
			<li>
				<div>
					<span>CGV影城（卓悦中心 激光IMAX店）</span>
					<span class="q"><span class="price">38</span> 元起</span>
				</div>
				<div class="address">
					<span>福田区福华路348号卓悦中心1栋B2层CGV影城</span>
					<span>28.3km</span>
				</div>
				<div class="card">
					<div class="vipTag">折扣卡</div>
                    <div class="hallType bl">IMAX厅</div>
                    <div class="hallType bl">4D厅</div>
				</div>
			</li>
			<li>
				<div>
					<span>保利国际影城（大中华店）</span>
					<span class="q"><span class="price">39</span> 元起</span>
				</div>
				<div class="address">
					<span>福田区福华路北大中华国际交易广场4楼（会展中心地铁站A出口）</span>
					<span>28.6km</span>
				</div>
				<div class="card">
					<div class="allowRefund bl">退</div>
                    <div class="endorse bl">改签</div>
                    <div class="vipTag">折扣卡</div>
                    <div class="hallType bl">杜比全景声厅</div>
				</div>
			</li>
			<li>
				<div>
					<span>金逸影城（中心城店）</span>
					<span class="q"><span class="price">41</span> 元起</span>
				</div>
				<div class="address">
					<span>福田区福华一路怡景中心城G层（会展中心地铁站B出口）</span>
					<span>28.9km</span>
				</div>
				<div class="card">
					<div class="snack">小吃</div>
                  	<div class="vipTag">折扣卡</div>
                    <div class="hallType bl">杜比全景声厅</div>
                    <div class="hallType bl">Dolby Cinema厅</div>
                    <div class="hallType bl">4D厅</div>
                    <div class="hallType bl">MX4D厅</div>
				</div>
			</li>
			<li>
				<div>
					<span>博纳国际影城（皇庭店）</span>
					<span class="q"><span class="price">39</span> 元起</span>
				</div>
				<div class="address">
					<span>福田区福华三路皇庭广场b1-3（会展中心c出口）</span>
					<span>29.1km</span>
				</div>
				<div class="card">
					<div class="endorse bl">改签</div>
                  	<div class="vipTag">折扣卡</div>
                    <div class="hallType bl">杜比全景声厅</div>
				</div>
			</li>
			<li>
				<div>
					<span>英皇电影城（平安金融中心IMAX激光店）</span>
					<span class="q"><span class="price">39</span> 元起</span>
				</div>
				<div class="address">
					<span>福田区益田路5023号平安金融中心商场南塔L６层S607</span>
					<span>29.3km</span>
				</div>
				<div class="card">
					<div class="hallType bl">IMAX厅</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name : 'CiList'
	// data(){
    //     return{
    //         movieList: ''
    //     }
    // },
    // mounted(){
    //     this.axios.get('/ajax/moreCinemas?day=2020-11-19&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=3&areaId=-1&stationId=-1&item=&updateShowDay=false&reqId=1605758865957&cityId=30&optimus_uuid=A6BA1FB0294511EB862405C5C7EFA0FAD4FF62E56E3E4984B53E47D18D611FFF&optimus_risk_level=71&optimus_code=10', {headers: {'Access-Control-Allow-Origin':'https://m.maoyan.com/'}}).then((res)=>{
    //         console.log(res)
    //         if(res.statusText === "OK"){
    //             this.movieList = res.data;
    //         }
    //     })
    // }
}
</script>

<style scoped>
#content .cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px; vertical-align:baseline;height: 18px;}
.cinema_body div span:nth-of-type(1){ max-width: 270px; display: inline-block; overflow: hidden;text-overflow: ellipsis; white-space: nowrap;}
.cinema_body div span:nth-of-type(2){ display: inline-block;}
.cinema_body .q{ font-size: 11px; color:#f03d37; margin-left: 10px;}
.cinema_body .price{ font-size: 18px; vertical-align: -5px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(1){ display:inline-block; width: 240px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex; width: 330px; height: 17px; overflow: hidden; flex-wrap: wrap; font-size: 0;} 
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}

</style>