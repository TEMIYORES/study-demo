import { useSelector } from "react-redux";
import {
  getCurrentUser,
  getUserLoggedIn,
} from "../features/store/auth/authSlice";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import ChatBot from "../components/ChatBot";
import { FormEvent, useEffect, useRef, useState } from "react";
import Loader from "../assets/loader.json";
import ProfileCenter from "../components/profileForm/ProfileCenter";
import { useGetSubjectsQuery } from "../features/Apislices/ProfileApiSlice";
// If you are using date-fns v2.x, please import `AdapterDateFns`
import { toast } from "sonner";
import Lottie from "lottie-react";
import { useLogSessionMutation } from "../features/Apislices/StudySessionApiSlice";

const LogSession = () => {
  const currentUser = useSelector(getCurrentUser);
  const userLoggedIn = useSelector(getUserLoggedIn);
  const sliderRef = useRef<HTMLInputElement>(null);
  const [range, setRange] = useState(30);
  // const [date, setDate] = useState<Date>(new Date());
  const [errorMessage, setErrorMessage] = useState("");
  const { data: subjects, isLoading: gettingSubjects } = useGetSubjectsQuery({
    email: currentUser?.email,
  });
  const [subject, setSubject] = useState("");
  useEffect(() => {
    if (subjects?.length) {
      setSubject(subjects[0].value);
    }
  }, [subjects]);

  const [logSession, { isLoading: LoggingSession }] = useLogSessionMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await logSession({
        email: currentUser?.email,
        subject,
        duration: range,
      }).unwrap();
      toast.success(response?.message);
    } catch (err: any) {
      setErrorMessage(err.response);
    }
  };
  return (
    <>
      {!userLoggedIn && <Navigate to={"/login"} replace={true} />}
      {!currentUser?.profileSetup && (
        <Navigate to={"/profile"} replace={true} />
      )}
      <main className="relative w-full min-h-screen bg-bg flex flex-col self-center place-items-center px-[2%] py-3 transition-all duration-500 ease-in-out md:px-[5%] lg:px-[10%]">
        <Header />
        <ChatBot />

        {gettingSubjects ? (
          <main className="w-full h-screen flex self-center place-content-center place-items-center">
            <Lottie
              animationData={Loader}
              loop={true}
              style={{ width: "100px" }}
            />
          </main>
        ) : (
          <div className="flex-grow w-full place-content-center">
            <ProfileCenter>
              <div className="text-center">
                <div className="mb-5">
                  <h3 className="text-textcolor text-xl font-semibold sm:text-2xl">
                    Log Study Session
                  </h3>
                </div>
              </div>
            </ProfileCenter>
          </div>
        )}
        {/* <StudyPlan studyPlan={studyPlan} /> */}
      </main>
    </>
  );
};

export default LogSession;
