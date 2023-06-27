import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider} from '@chakra-ui/react'
import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <App/>
            </QueryClientProvider>
        </ChakraProvider>
    </React.StrictMode>
);
