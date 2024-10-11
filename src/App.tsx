import { HStack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Menu } from '~/components/ui/menu'
import { Text } from '~/components/ui/text'

const App = (props: Menu.RootProps) => {
  return (
    <Menu.Root {...props}>
      <Menu.Trigger asChild>
        <Button variant="outline" size={props.size}>
          Open Menu
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.ItemGroup>
            <Menu.ItemGroupLabel>My Account</Menu.ItemGroupLabel>
            <Menu.Separator />
            <Menu.Item value="profile">
              <HStack gap="6" justify="space-between" flex="1">
                <HStack gap="2">
                  Profile
                </HStack>
                <Text as="span" color="fg.subtle" size="sm">
                  ⇧⌘P
                </Text>
              </HStack>
            </Menu.Item>
            <Menu.Item value="billing">
              <HStack gap="2">
                Two
              </HStack>
            </Menu.Item>
            <Menu.Item value="settings">
              <HStack gap="6" justify="space-between" flex="1">
                <HStack gap="2">
                  Three
                </HStack>
                <Text as="span" color="fg.subtle" size="sm">
                  ⌘,
                </Text>
              </HStack>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item value="logout">
              <HStack gap="2">
                Logout
              </HStack>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}

export default App