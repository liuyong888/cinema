<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdminDianyingaddinsert extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    //表单授权
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    //校验规则
    public function rules()
    {
        return [
            'zwname'=>'required|unique:movies',
            'ywname'=>'required',
            'tupian'=>'required',
            'leixing'=>'required',
            'diqu'=>'required',
            'shichang'=>'required',
            'syshijian'=>'required',
            'sydiqu'=>'required',
            'xiangkan'=>'required',
            'piaofang'=>'required',
            'pingfen'=>'required',
            'jianjie'=>'required'
        ];
    }
    //自定义错误信息
    public function messages()
    {
        return[
            'zwname.required'=>'电影中文名字不能为空',
            'zwname.unique'=>'电影中文名字重复',
            'ywname.required'=>'电影英文名字不能为空',
            'tupian.required'=>'电影图片不能为空',
            'leixing.required'=>'电影类型不能为空',
            'diqu.required'=>'电影地区不能为空',
            'shichang.required'=>'电影时长不能为空',
            'syshijian.required'=>'电影上映时间不能为空',
            'sydiqu.required'=>'电影上映地区不能为空',
            'xiangkan.required'=>'电影想看不能为空',
            'piaofang.required'=>'电影票房不能为空',
            'pingfen.required'=>'电影评分不能为空',
            'jianjie.required'=>'电影简介不能为空'
        ];
    }
}
