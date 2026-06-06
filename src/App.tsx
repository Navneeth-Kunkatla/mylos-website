import { Switch, Route, Redirect, Router as WouterRouter } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/boba">{() => <Redirect to="/#boba-menu" />}</Route>
      <Route path="/ice-cream">{() => <Redirect to="/#ice-cream-menu" />}</Route>
      <Route path="/about">{() => <Redirect to="/#top" />}</Route>
      <Route path="/find-us">{() => <Redirect to="/#find-us" />}</Route>
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </TooltipProvider>
  );
}

export default App;
