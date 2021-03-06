# 应用管理

## 项目列表


`接口描述` : `项目列表`

`请求路径` :  `/v1/domains`

`请求方法` :  `GET`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
| page   | 1      | String | 指定第几页 |  true |
| per_page   | 30      | String | 每页的记录数 |  true |


示例：
```js
/domains?page=2&per_page=30
```

`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```
## 项目详情


`接口描述` : `项目详情`

`请求路径` :  `/v1/domains/<ID>`

`请求方法` :  `GET`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |



示例：
```js
/domains/1
```

`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```
## 添加项目


`接口描述` : `添加项目`

`请求路径` :  `/v1/domains`

`请求方法` :  `POST`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
|name | 1 | String | 名称 | true|
|callbackurl | 1 | String | 跳转地址 | true|
|remark | test | String | 备注 | true|


`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```
## 编辑项目


`接口描述` : `编辑项目`

`请求路径` :  ``

`请求方法` :  `PUT`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`请求参数` : 参数类型 `params`
| 参数        | 值           | 类型  | 说明 | 必须 | 
|:----------:|:---------:|:-----:|  :---------:|:----: |
|name | 1 | String | 名称 | true|
|callbackurl | 1 | String | 跳转地址 | true|
|remark | test | String | 备注 | true|


`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```
## 删除项目


`接口描述` : `删除项目`


`请求路径` :  `/v1/domains/<ID>`

`请求方法` :  `DELETE`

`请求头`: 
```
Content-Type: application/json
Authorization: Bearer + token 
```

`响应数据` : 
```json
{
    "code": 200,
    "msg": "success",
    "data": {

    }
}
```