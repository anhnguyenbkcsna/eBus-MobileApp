export * from './Route';

export const RouteContainer = ({
    navigation,
  }: AccountNavigatorProps) => {
    const onNavigate = (screen: RootScreens) => {
      navigation.navigate(screen);
    };
  
    return <Route onNavigate={onNavigate} />;
};