export const mockMenuData = [
    /* {
      path: '',
      name: 'doc',
      meta: {
        title: '文档',
        href: 'https://lison16.github.io/iview-admin-doc/#/',
        icon: 'ios-book'
      }
    }, */
    {
      path: '/multilevel',
      name: 'multilevel',
      meta: {
        icon: 'md-menu',
        title: '多级菜单'
      },
      component: 'Main',
      children: [
        {
          path: 'level_2_1',
          name: 'level_2_1',
          meta: {
            icon: 'md-funnel',
            title: '二级-1'
          },
          component: 'multilevel/level-2-1'
        },
        {
          path: 'level_2_2',
          name: 'level_2_2',
          meta: {
            icon: 'md-funnel',
            showAlways: true,
            title: '二级-2'
          },
          component: 'parentView',
          children: [
            {
              path: 'level_2_2_1',
              name: 'level_2_2_1',
              meta: {
                icon: 'md-funnel',
                title: '三级'
              },
              component: 'multilevel/level-2-2/level-3-1'
            }
          ]
        },
        {
          path: 'level_2_3',
          name: 'level_2_3',
          meta: {
            icon: 'md-funnel',
            title: '二级-3'
          },
          component: 'multilevel/level-2-3'
        }
      ]
    },
    {
      path: '/platform',
      name: 'platform',
      meta: {
        icon: 'md-menu',
        title: '平台管理'
      },
      component: 'Main',
      children: [
        {
          path: 'platform_setting',
          name: 'platform_setting',
          meta: {
            icon: 'md-funnel',
            title: '设置管理'
          },
          component: 'parentView',
          children: [
            {
              path: 'settingmanagement',
              name: 'settingmanagement',
              meta: {
                icon: 'md-funnel',
                title: '系统设置'
              },
              component: 'platform/platform_setting/settingManagement'
            }
          ]
        },
        {
          path: 'platform_auth',
          name: 'platform_auth',
          meta: {
            icon: 'md-funnel',
            title: '权限管理'
          },
          component: 'parentView',
          children: [
            {
              path: 'menumanagement',
              name: 'menumanagement',
              meta: {
                icon: 'md-funnel',
                title: '菜单管理'
              },
              component: 'platform/platform_auth/menuManagement'
            },
            {
              path: 'rolemanagement',
              name: 'rolemanagement',
              meta: {
                icon: 'md-funnel',
                title: '角色管理'
              },
              component: 'platform/platform_auth/roleManagement'
            }
          ]
        }
      ]
    }
  ]
  