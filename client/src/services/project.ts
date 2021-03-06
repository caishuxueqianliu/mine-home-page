/**
 * @description: 项目相关接口
 * @author: liuhao
 * @createdTime: 2022-03-04 12:30
 * @lastModifiedTime: 2022-03-04 12:30
 */

import request from '../utils/request'

const BASE = '/api'

/** 项目列表接口 GET /homepage/projectList */
export async function getProjectList(options?: { [key: string]: any }) {
    return request({
        url: BASE + '/homepage/projectList',
        method: 'GET',
        ...(options || {})
    })
}

/** 项目详情接口 GET /homepage/projectInfo */
export async function getProjectInfo(params:{ id:string | undefined },options?: { [key: string]: any }) {
    return request({
        url: BASE + '/homepage/projectInfo',
        params,
        method: 'GET',
        ...(options || {})
    })
}

/** 上传ip日志信息 GET /homepage/log */
export async function getLog(params:{ path:string | undefined },options?: { [key: string]: any }) {
    return request({
        url: BASE + '/homepage/log',
        params,
        method: 'GET',
        ...(options || {})
    })
}
