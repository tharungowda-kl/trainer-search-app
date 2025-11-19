import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="apple" size={28} color={focused ? 'red' : 'pink'} />
          ),
        }}
      />

      <Tabs.Screen
        name="projects"
        options={{
          title: 'Projects',
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="tasks" size={28} color={focused ? 'green' : '#90EE90'} />
          ),
        }}
      />

      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="address-book"
              size={28}
              color={focused ? '#1E90FF' : '#87CEFA'}
            />
          ),
        }}
      />
    </Tabs>
  );
}
