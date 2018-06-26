//基于准备好的Dom，初始化echarts实例
let myChart = echarts.init(document.getElementById('main'));

//指定图表的配置项和数据
let option = {
	//全局调色盘，自己设定一组颜色，图形、系列会自动从其中选择颜色
	color: ['#FF69B4'],	//粉红色

	//标题，这里设置标题位于图表的中央
	title: {
		text: 'Title',
		x: 'center',
		y: 'center',
		textStyle: {
			color: '#333',
			fontWeight: 'bolder',
			fontSize: 36,
		}
	},
	tooltip: {},
	legend: {
		data: ['Legend']
	},
	radar: {

		//数值的标题的样式
		name: {
			textStyle: {
				color: '#fff',
				backgroundColor: '#666',
				borderRadius: 3,
				padding: [3, 5],
				fontSize: 12
			}
		},

		//数值的标题、最大值
		indicator: [

			{name: '市场', max: 100},
			{name: '研发', max: 100},
			{name: '销售', max: 100},
			{name: '管理', max: 100},
			{name: '客服', max: 100}

		],

		//雷达图的图表半径
		radius: 100,

		//雷达图的图表放置的位置
		center: ['50%', '50%'],

		//雷达图的图表背景，分隔区域颜色。分隔区域会按照数组中颜色的顺序依次循环设置颜色。
		splitArea: {
			show: true,
			areaStyle: {
				color: ['rgba(26, 119, 197, 0.3)', 'rgba(250,250,250,0.3)']
			}
		},
	},

	series: [{
		
		//对应上面的 name
		name: 'Legend',
		
		//选择图表的表现形式
		type: 'radar',

		//设置数据连线包围的区域的样式
		areaStyle: {
			normal: {
				color: 'rgba(255, 129, 168, 0.3)'
			}
		},

		data: [{
			value: [94, 87, 91, 99, 88],
			name: 'Legend',

			//显示数值
			label: {
				normal: {
					show: true,
					formatter: function(params) {
						return params.value;
					}
				}
			}

		}]

	}]

};

myChart.setOption(option);