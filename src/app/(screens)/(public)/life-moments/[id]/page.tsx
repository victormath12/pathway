import { getLifeMomentsPaths } from "@psi/services/onboarding"
import { CardPath } from "./_components/card-path"

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
              NEWLY WEDS
            </h2>
            <p className="text-gray-500 text-lg">
              Marriage is a beautiful relation designed by God to perpetuate the humanity through love. Recommend for couples under 2 years.
            </p>
            <p className="text-gray-800 text-lg font-semibold">
              Find a path to join:
            </p>
          </div>
          <div className="flex flex-col">
            {resultList?.map((x, idx) => (
              <CardPath
                key={idx}
                path={{
                  id: x.id,
                  name: x.name,
                  status: x.status,
                  category: x.category,
                  managers: x.managers,
                  enroll_availability_start_date: x.enroll_availability_start_date,
                  total_members: x.total_members,
                  subscription: x.subscription
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
