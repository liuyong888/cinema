<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    //定义与模型关联的数据表
    protected $table = "member_info";
    //主键
    protected $primaryKey="id";
    public $timestamps = false;
    protected $fillable = ['name','nickname','sex','birthday','status','industry','interest','sign','pic'];
    public function getSexAttribute($value){
    	$sex=[0=>'女',1=>'男'];
    	return $sex[$value];
    }
}
