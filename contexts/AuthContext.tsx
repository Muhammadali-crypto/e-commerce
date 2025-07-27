'use client'

import { createContext } from 'react'
import { useContext, useEffect, useState, ReactNode } from 'react'
// import { updateProfile } from 'firebase/auth'
// import { User } from 'firebase/auth'
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
  sendEmailVerification,
} from 'firebase/auth'
import { auth } from '../lib/firebase'


type AuthContextType = {
  sendVerificationEmail: () => Promise<void>
}


const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}


interface Type {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, displayName?: string) => Promise<void>
  logout: () => Promise<void>
  signInWithGoogle: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
  updateUserProfile: (displayName: string, photoURL?: string) => Promise<void>
  sendVerificationEmail: () => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email: string, password: string, displayName?: string) => {
    setLoading(true)
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      if (displayName) {
        await updateProfile(user, { displayName })
      }
      await sendEmailVerification(user)
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true)
    try {
      await signOut(auth)
    } finally {
      setLoading(false)
    }
  }

  const signInWithGoogle = async () => {
    setLoading(true)
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
    } finally {
      setLoading(false)
    }
  }

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email)
  }

 const updateUserProfile = async (
  displayName: string,
  photoURL?: string | null
) => {
  if (user) {
    try {
      await updateProfile(user, {
        displayName,
        photoURL: photoURL ?? null, // здесь важно!
      })

      setUser({
        ...user,
        displayName,
        photoURL: photoURL ?? null,
      })
    } catch (error) {
      console.error("Ошибка при обновлении профиля:", error)
    }
  }
}

  const sendVerificationEmail = async () => {
    if (user) {
      await sendEmailVerification(user)
    }
  }

  const value: Type = {
    user,
    loading,
    signIn,
    signUp,
    logout,
    signInWithGoogle,
    resetPassword,
    updateUserProfile,
    sendVerificationEmail,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
} 