
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      
      if (email.endsWith('@nain.med') && password.length >= 6) {
        toast.success('Login successful');
        navigate('/');
      } else {
        toast.error('Invalid credentials', {
          description: 'Please use a valid NAIN medical email and password',
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background grid-bg">
      <div className="w-full max-w-md p-4 sm:p-0">
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className="relative h-10 w-10 mr-2">
              <div className="absolute inset-0 bg-medical-blue rounded-full opacity-20 animate-pulse-subtle"></div>
              <div className="absolute inset-1 bg-medical-blue rounded-full"></div>
            </div>
            <span className="font-bold text-2xl">Bio_Twin_X</span>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Authentication</CardTitle>
            <CardDescription>
              Enter your credentials to access the Bio_Twin_X platform
            </CardDescription>
          </CardHeader>
          
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="request">Request Access</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="doctor@nain.med"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a 
                        href="#" 
                        className="text-xs text-medical-blue hover:underline"
                        onClick={(e) => {
                          e.preventDefault();
                          toast.info('Password reset link sent', {
                            description: 'If your email is in our system, you will receive reset instructions',
                          });
                        }}
                      >
                        Forgot password?
                      </a>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Authenticating...' : 'Login'}
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
            
            <TabsContent value="request">
              <CardContent className="py-4">
                <div className="text-center space-y-4">
                  <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium">Access Request</h3>
                  <p className="text-sm text-muted-foreground">
                    Bio_Twin_X is currently available to authorized NAIN medical personnel only. Contact your department administrator for access.
                  </p>
                  <Button variant="outline" className="w-full" onClick={() => {
                    window.location.href = "mailto:access@biotwinx.nain.gov";
                  }}>
                    Contact Administrator
                  </Button>
                </div>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
        
        <p className="mt-4 text-center text-sm text-muted-foreground">
          NAIN Initiative — Bio_Twin_X v1.0.0
        </p>
      </div>
    </div>
  );
};

export default Login;
