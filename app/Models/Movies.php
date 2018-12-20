<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Movies extends Model
{
    //定义与模型关联的数据表
    protected $table="movies";
    //主键
    protected $primaryKey="id";
    //设置是否需要自动维护时间戳
    public $timestamps = false;
    /**
	* 可以被批量赋值的属性。
	*
	* @var array
	*/
	protected $fillable =['zwname','ywname','tupian','leixing','diqu','shichang','syshijian','sydiqu','xiangkan','piaofang','pingfen','jianjie'];
	//修改器的方法
	//对完成的数据作自动处理
	public function getLeixingAttribute($value){
		$leixing=[1=>'爱情',2=>'喜剧',3=>'动画',4=>'剧情',5=>'恐怖',6=>'惊悚',8=>'科幻',9=>'动作',10=>'悬疑',11=>'犯罪',12=>'冒险',13=>'战争',14=>'奇幻',15=>'运动',16=>'家庭',17=>'古装',18=>'武侠',19=>'西部',20=>'历史',21=>'传记',22=>'歌舞',23=>'黑色电影',24=>'短片',25=>'纪录片'];
		return $leixing[$value];
	}
	public function getDiquAttribute($value){
		$diqu=[1=>'大陆',2=>'美国',3=>'韩国',4=>'日本',5=>'中国香港',6=>'中国台湾',7=>'泰国',8=>'印度',9=>'法国',10=>'英国',11=>'俄罗斯',12=>'意大利',13=>'西班牙',14=>'德国',15=>'波兰',16=>'澳大利亚',17=>'伊朗'];
		return $diqu[$value];
	}
}
