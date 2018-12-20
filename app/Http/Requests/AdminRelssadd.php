<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdminRelssadd extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
        // 用户名不能为空规则设置 required输入的数据不能为空 regex设置正则 unique字段值唯一
            // 用户名规则
            'name'=>'required|unique:cinemas',
            // 地址规则
            'address'=>'required',
            //图片规则 required不能为空 image格式 
            'pic'=>'image',
            // 电话规则
            'tel'=>'required|regex:/\d{11}/',            
        ];
    }
    // 自定义错误信息
    public function messages(){
        return [
        // 用户名错误消息
            'name.required'=>'影院名不能为空',
            'name.unique'=>'影院名已存在',
        // 地址错误消息
            'address.required'=>'地址不能为空',
        // 电话错误消息
            'tel.required'=>'电话不能为空',
            'tel.regex'=>'电话不符合格式,请输入11位的号码',      
        // 图片错误消息           
            'pic.image'=>'上传图片异常',
        ];
    }
}
