import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const items: TabsProps['items'] = [
    {
        key: '1',
        label: <h3>站点信息</h3>,
        children: <>

        </>,
    },
    {
        key: '2',
        label: <h3>用户信息</h3>,
        children: <>

        </>,
    },
    {
        key: '3',
        label: <h3>社交媒体</h3>,
        children: <>

        </>,
    },
    {
        key: '4',
        label: <h3>背景图片</h3>,
        children: <>

        </>,
    },
];

const UserControl = () => {
    const onChange = (key: string) => {
        console.log(key);
    };

    return <div style={{padding: 20}}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
}

export default UserControl