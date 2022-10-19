import React from 'react'
import { Layout } from 'antd'
import Bar from './Bar'

function Header() {
    return (
        <>
            <Layout.Header className="site-layout-background" style={{ backgroundColor:'#f0f2f5', padding: 0 }}>
                <Bar/>
            </Layout.Header>
        </>
    )
}

export default Header