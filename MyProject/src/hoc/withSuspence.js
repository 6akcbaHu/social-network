import {Suspense} from "react";
import * as React from "react";
import Preloader from "../componets/common/Preloader/Preloader";

export const withSuspense = Component => {
    return <Suspense fallback={<Preloader/>}><Component/></Suspense>;
}