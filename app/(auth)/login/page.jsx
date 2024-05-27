"use client"

import { login } from '@/actions/auth';
import SubmitButton from '@/components/SubmitButton';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';

export default function LoginPage() {
    const [state, formAction] = useFormState(login, {});
    const router = useRouter();

    useEffect(() => {
        toast(state?.message, { type: `${state?.status}` });

        if (state?.status === 'success') {
            router.push("/")
        }
    }, [state])

    return (
        <div className="row mt-5 justify-content-center align-items-center">
            <div className="col-md-3">
                <div className="card">
                    <div className="card-body py-5">
                        <h4 className="mb-5 text-center">ورود به پنل ادمین</h4>
                        <form action={formAction}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">ایمیل</label>
                                <input name='email' type="email"
                                    className="form-control" id="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">رمز عبور</label>
                                <input name='password' type="password"
                                    className="form-control" />
                            </div>
                            <SubmitButton title="ورود" style="btn btn-dark" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}