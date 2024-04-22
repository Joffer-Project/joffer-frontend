import { Role } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

const createRole = async (selectedRoleIds: string[], token: string | undefined, roles: Role[]): Promise<boolean> => {
    let allCreated: boolean = true;
    for (const roleId of selectedRoleIds) {

        const role: Role | undefined = roles.find(role => role.id.toString() === roleId);

        if (role) {
            const data = {
                id: role.id,
                name: role.name,
                isActive: role.isActive
            };

            try {
                const res = await fetch(`${URL}/Role/Account/${role.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify(data),
                });

                if (res.ok) {
                    console.log(`Role ${role.name} posted successfully`);
                } else {
                    console.error(`Failed to post role ${role.name}. Status: ${res.status}`);
                    allCreated = false;
                }
            } catch (error: any) {
                console.error(`Error posting role ${role.name}: ${error.message}`);
                allCreated = false;
            }
        } else {
            console.error(`Role with ID ${roleId} not found`);
            allCreated = false;
        }
    }

    return allCreated;
};

const getRoles = async () => {
    const response = await fetch(`${URL}/Roles/GetAll`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    if (!response.ok) {
        throw new Error("An error occurred while fetching the industry data.");
    }
    const data = await response.json();
    return data as Role[];
};

const createRoleForJob = async (selectedRoleIds: string[], token: string | undefined, roles: Role[], JobOfferId: number): Promise<boolean> => {
    let allCreated: boolean = true;
    for (const roleId of selectedRoleIds) {

        const role: Role | undefined = roles.find(role => role.id.toString() === roleId);

        if (role) {
            const data = {
                id: role.id,
                name: role.name,
                isActive: role.isActive
            };

            try {
                const res = await fetch(`${URL}/Role/${role.id}/JobOffer/${JobOfferId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify(data),
                });

                if (res.ok) {
                    console.log(`Role ${role.name} posted successfully`);
                } else {
                    console.error(`Failed to post role ${role.name}. Status: ${res.status}`);
                    allCreated = false;
                }
            } catch (error: any) {
                console.error(`Error posting role ${role.name}: ${error.message}`);
                allCreated = false;
            }
        } else {
            console.error(`Role with ID ${roleId} not found`);
            allCreated = false;
        }
    }

    return allCreated;
};

export { createRole, getRoles, createRoleForJob };