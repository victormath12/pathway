import { Button } from "@psi/commons/components/ui/button"
import { getMatchResult } from "@psi/services/onboarding"
import { CardProfessionalWithSlots } from "./_components/card-professional-with-slots"

export default async function OnboardingMatchResultPage() {
  const match = await getMatchResult({ id: "X" })

  if (match == null) return

  return (
    <div className="max-w-6xl mx-auto py-4 pr-4 pl-4">
      <div className="grid grid-cols-1 gap-x-4">
        <div className="space-y-16">
          <div className="flex flex-col space-y-4">
            <h2 className="font-semibold text-3xl">
              Life Moments
            </h2>
            <p className="text-gray-500 text-lg">
              Each one of us goes through different moments in life. Is better to not go alone.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold text-1xl">Suggested</h3>
            <p className="text-lg text-gray-500">
              Based on the information you selected, here are some life moments that may be related to you
            </p>
          </div>

          {/* Ajustando a altura máxima e overflow para os cards */}
          <div className="flex gap-x-4 overflow-y-auto max-h-[600px]">
            {match.map((x, idx) => (
              <CardProfessionalWithSlots
                key={idx}
                professional={{
                  name: x.nickName,
                  avatar: x.avatarUrl,
                  bio: x.bio,
                }}
                slots={x.availableSlots}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
