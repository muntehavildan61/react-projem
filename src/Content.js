import React from 'react'
import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from './Rooter'

function Content() {
  return (
  <>
    <Layout>
      <Layout.Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          
          <Routes>

            {
              routerConfig && routerConfig.map((item, key) => {
                return <Route key={key} path={item.path} element={item.element} />

              })
            }
          </Routes>
        </div>
      </Layout.Content>
    </Layout>
  </>
  )
}

export default Content