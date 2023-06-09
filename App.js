import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/routes';
import {SafeAreaView, StatusBar } from 'react-native';
import { ProfessorProvider } from './src/contexts/professor/professorContext';
import { AlunoProvider } from './src/contexts/aluno/alunoContext';

export default function App() {
  
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar />
      <ProfessorProvider>
        <AlunoProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </AlunoProvider>
      </ProfessorProvider>
    </SafeAreaView>
  );
}

