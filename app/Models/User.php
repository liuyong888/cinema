<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    //定州与模型关联的数据表
    protected $table = "user";
    //主键
    protected $primaryKey="id";
    public $timestamps=false;
    protected $fillable = ['username','password','qx','status','addtime','phone','token'];
    //修改器方法
    //对完成的数据('状态 status')做自动处理
    public function getStatusAttribute($value){
    	$status=[0=>'已启用',1=>'已禁用'];
    	return $status[$value];
    }
     public function getQxAttribute($value){
    	$qx=[0=>'普通用户',1=>'VIP用户',2=>'一般管理员',3=>'超级管理员'];
    	return $qx[$value];
    }
}
