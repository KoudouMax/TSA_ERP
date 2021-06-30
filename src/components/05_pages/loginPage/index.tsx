import * as React from 'react';
import { Stack, IStackTokens, IStackItemStyles, IStackStyles } from '@fluentui/react/lib/Stack';
import { Text } from '@fluentui/react/lib/Text';
import {LoginForm} from '../../02_molecules';

const stackItemStyles: IStackItemStyles = {
    root: {
      padding: 5,
      width: 300,
    },
  };

const containerStackstyles: IStackStyles = {
    root: {
        height: '100%',
    }
}

const containerInnerStackstyles: IStackStyles = {
    root: {
        height: '100%',
        justifyContent: 'center'
    }
}

const helperTextStackstyles: IStackStyles = {
    root: {
        paddingTop: 12,
        paddingBottom: 12
    }
}

const containerStackTokens: IStackTokens = { childrenGap: 5 };
const LoginPage: React.FunctionComponent = () => {
    return(
        <Stack tokens={containerStackTokens} styles={containerStackstyles}>
            <Stack verticalAlign="center" styles={containerInnerStackstyles}>
                <Stack.Item align="center" styles={stackItemStyles}>
                    <Text variant='xLarge' block>Content de vous revoir :)</Text>
                    <Stack styles={helperTextStackstyles}>
                        <Text variant='medium'>Si vous rencontrer des problêmes pour vous connecter. Merci de vous rapporcher de l'administrateur</Text>
                    </Stack>
                    <LoginForm />
                </Stack.Item>
            </Stack>
        </Stack>
    )
}

export default LoginPage;