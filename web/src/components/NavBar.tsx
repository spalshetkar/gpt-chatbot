import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import aiIcon from "../assets/ai.ico";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { supabase } from "../lib/supabaseClient";
import { Session } from "@supabase/supabase-js";

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        setIsOpen(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const handleLogoClick = () => {
    if (session) {
      navigate('/app/v1');
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="bg-white-800 text-black border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button onClick={handleLogoClick} className="flex items-center">
              <img src={aiIcon} alt="ChatApp" className="w-10 h-10" />
            </button>
          </div>
          <div className="relative">
            {session ? (
              <button
                onClick={handleSignOut}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors text-white"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsOpen(true);
                  setActiveTab("signin");
                }}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors text-white"
              >
                Sign In
              </button>
            )}
          </div>

          {isOpen && !session && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <div className="flex justify-between mb-4">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setActiveTab("signin")}
                      className={`pb-2 font-medium ${
                        activeTab === "signin"
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-500"
                      }`}
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => setActiveTab("signup")}
                      className={`pb-2 font-medium ${
                        activeTab === "signup"
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-500"
                      }`}
                    >
                      Sign Up
                    </button>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {activeTab === "signin" ? (
                  <SignInForm />
                ) : (
                  <SignUpForm />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
