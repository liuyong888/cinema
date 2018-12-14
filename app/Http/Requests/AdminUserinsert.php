<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdminUserinsert extends FormRequest
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
            //管理员管理账号做规则设置
            'name'=>'required|regex:/\w{5,12}/|unique:admin_users',
            //密码
            'password'=>'required|regex:/\w{5,12}/',
            //重复密码 same 校验两次密码是否一致
            'repassword'=>'required|regex:/\w{5,12}/|same:password',
            // //电话
            // 'phone'=>'required|regex:/\d{11}/'
        ];
    }
    //自定义错误信息
    public function messages(){
        return [
            'name.required'=>'用户名不能为空',
            'name.regex'=>'用户名必须为5-12位任意数字字母下划线',
            'name.unique'=>'用户名重复',
            'password.required'=>'密码不能为空',
            'password.regex'=>'密码必须为5-12位任意的数字字母下划线',
            'repassword.required'=>'重复密码不能为空',
            'repassword.regex'=>'重复密码必须为5-12位任意的数字字母下划线',
            // 'repassword.same'=>'两次密码不一致',
            // 'phone.required'=>'电话不能为空',
            // 'phone.regex'=>'电话不符合要求'
        ];
    }
}
