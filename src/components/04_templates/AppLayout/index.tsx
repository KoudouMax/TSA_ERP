import * as React from 'react'
import { Stack, IStackTokens, IStackStyles } from '@fluentui/react/lib/Stack';

import { TopNav, Sidebar } from '../../03_organisms';

const containerStackstyles: IStackStyles = {
    root: {
        height: '100%',
    }
}

const containerStackTokens: IStackTokens = { childrenGap: 5 };

type AppLayoutProps  = {
    children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({children}: AppLayoutProps) => {
    return(
        <Stack tokens={containerStackTokens} styles={containerStackstyles}>
          <TopNav />
          <Sidebar />
          {children}
        </Stack>
    )
}

export default AppLayout