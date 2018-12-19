<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pinglun extends Model
{
    //laravel里一个模型类对应一个数据表
    //规定属性
    //与模型关联的数据表
	protected $table = 'comment';
	//该模型是否被自动维护时间戳
	public $timestamps=false;
	//可以被批量赋值的属性(字段)
	protected $fillable=['user_name','user_touxiang','m_id','content','addtime','status'];
}
