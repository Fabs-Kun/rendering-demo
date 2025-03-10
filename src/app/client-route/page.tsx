"use client";

import React from 'react';
import { useTheme } from '@/components/theme-provider';
import { clientSideFunction } from '@/utils/client-utils';

export default function ClientRoutePage() {
    const theme = useTheme();
    const result = clientSideFunction();
    
    return (
        <h1>Client Route {result}</h1>
      );
    }
