import { getLifeMomentsPaths } from "@psi/services/onboarding"
import { CardPath } from "./_components/card-path"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@psi/commons/components/ui/avatar"

export default async function OnboardingResultPage() {
  const resultList = await getLifeMomentsPaths({ lifeMomentId: "1234" })

  if (resultList == null) return

  console.log(resultList)

  return (
    <div className="max-w-6xl mx-auto py-4 pr-4 pl-4">
      <div className="grid grid-cols-1 gap-x-4">
        <div className="space-y-8">
          <div className="flex flex-col space-y-4">
            <h2 className="font-semibold text-3xl">
              HOUSE DYNAMICS
            </h2>
            <div className="flex -space-x-3">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/100" />
              </Avatar>
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/200" />
              </Avatar>
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/300" />
              </Avatar>
              <p className="text-sm text-gray-500 pl-8">
                John & Maria <br />
                <strong>+5 group of people</strong>
              </p>
            </div>
            <p className="text-gray-800 text-lg font-semibold">
              DESCRIPTION
            </p>
            <p className="text-gray-500 text-lg">
              When you marry there is a phase of adaptation between the newly weds. Is important to make the right questions and have the right conversations.
            </p>
            <p className="text-gray-800 text-lg font-semibold">
              AGENDA OF THIS PATH
            </p>
          </div>
          <div className="flex flex-col">
            <div className="p-6 rounded-xl bg-white shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className='bg-indigo-50 text-indigo-500 text-xs font-medium mr-2 px-1.5 py-1 rounded-full'>Text Resource</span>
                  <p className="text-base font-medium text-gray-900">Nov 10, 2024</p>
                </div>
                <div className="dropdown relative inline-flex">
                  <button type="button" data-target="dropdown-a" className="dropdown-toggle inline-flex justify-center py-2.5 px-1 items-center gap-2 text-sm text-black rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:text-sky-400  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="4" viewBox="0 0 12 4" fill="none">
                      <path d="M1.85624 2.00085H1.81458M6.0343 2.00085H5.99263M10.2124 2.00085H10.1707" stroke="currentcolor" stroke-width="2.5" stroke-linecap="round"></path>
                    </svg>
                  </button>
                  <div id="dropdown-a" className="dropdown-menu rounded-xl shadow-lg bg-white absolute -left-10 top-full w-max mt-2 hidden" aria-labelledby="dropdown-a">
                    <ul className="py-2">
                      <li>
                        <a className="block px-6 py-2 text-xs hover:bg-gray-100 text-gray-600 font-medium" href="javascript:;">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="block px-6 py-2 text-xs hover:bg-gray-100 text-gray-600 font-medium" href="javascript:;">
                          Remove
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
              <h6 className="text-xl leading-8 font-semibold text-black mb-1">Building Functional Routines</h6>
              <p className="text-base font-normal text-gray-600">Designate areas and items that support smooth morning and evening routines, helping couples start and end their days positively.</p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-md mt-6 ">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className='bg-red-50 text-red-500 text-xs font-medium mr-2 px-1.5 py-1 rounded-full'>Live group session</span>
                  <p className="text-base font-medium text-gray-900">Nov 12, 2024</p>
                </div>
                <div className="dropdown relative inline-flex">
                  <button type="button" data-target="dropdown-a" className="dropdown-toggle inline-flex justify-center py-2.5 px-1 items-center gap-2 text-sm text-black rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:text-sky-400  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="4" viewBox="0 0 12 4" fill="none">
                      <path d="M1.85624 2.00085H1.81458M6.0343 2.00085H5.99263M10.2124 2.00085H10.1707" stroke="currentcolor" stroke-width="2.5" stroke-linecap="round"></path>
                    </svg>
                  </button>
                  <div id="dropdown-a" className="dropdown-menu rounded-xl shadow-lg bg-white absolute -left-10 top-full w-max mt-2 hidden" aria-labelledby="dropdown-a">
                    <ul className="py-2">
                      <li>
                        <a className="block px-6 py-2 text-xs hover:bg-gray-100 text-gray-600 font-medium" href="javascript:;">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="block px-6 py-2 text-xs hover:bg-gray-100 text-gray-600 font-medium" href="javascript:;">
                          Remove
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
              <h6 className="text-xl leading-8 font-semibold text-black mb-1">Growing in Faith</h6>
              <p className="text-base font-normal text-gray-600">Cultivate a closer relationship with God by embracing consistent prayer, studying scripture, and living out Christian values as paths to spiritual growth..</p>
            </div>


            <div className="p-6 rounded-xl bg-white shadow-md mt-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className='bg-yellow-50 text-yellow-700 text-xs font-medium mr-2 px-1.5 py-1 rounded-full'>Video Resource</span>
                  <p className="text-base font-medium text-gray-900">Nov 14, 2024</p>
                </div>
                <div className="dropdown relative inline-flex">
                  <button type="button" data-target="dropdown-a" className="dropdown-toggle inline-flex justify-center py-2.5 px-1 items-center gap-2 text-sm text-black rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:text-sky-400  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="4" viewBox="0 0 12 4" fill="none">
                      <path d="M1.85624 2.00085H1.81458M6.0343 2.00085H5.99263M10.2124 2.00085H10.1707" stroke="currentcolor" stroke-width="2.5" stroke-linecap="round"></path>
                    </svg>
                  </button>
                  <div id="dropdown-a" className="dropdown-menu rounded-xl shadow-lg bg-white absolute -left-10 top-full w-max mt-2 hidden" aria-labelledby="dropdown-a">
                    <ul className="py-2">
                      <li>
                        <a className="block px-6 py-2 text-xs hover:bg-gray-100 text-gray-600 font-medium" href="javascript:;">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="block px-6 py-2 text-xs hover:bg-gray-100 text-gray-600 font-medium" href="javascript:;">
                          Remove
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
              <h6 className="text-xl leading-8 font-semibold text-black mb-1">Budget-Friendly Home Plan</h6>
              <p className="text-base font-normal text-gray-600">Develop a shared vision for future home improvements or upgrades in finances, creating a foundation for decision-making together.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
